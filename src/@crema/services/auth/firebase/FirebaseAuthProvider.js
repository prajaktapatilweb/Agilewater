import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from './firebase';
import {useDispatch} from 'react-redux';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from 'shared/constants/ActionTypes';
import jwtAxios from '../jwt-auth';

const FirebaseContext = createContext();
const FirebaseActionsContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);

export const useFirebaseActions = () => useContext(FirebaseActionsContext);

const FirebaseAuthProvider = ({children}) => {
  const [firebaseData, setFirebaseData] = useState({
    user: undefined,
    isLoading: true,
    isAuthenticated: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const getAuthUser = auth.onAuthStateChanged(
      (user) => {
        setFirebaseData({
          user: user,
          isAuthenticated: Boolean(user),
          isLoading: false,
        });
      },
      () => {
        setFirebaseData({
          user: firebaseData.user,
          isLoading: false,
          isAuthenticated: false,
        });
      },
      (completed) => {
        setFirebaseData({
          user: firebaseData.user,
          isLoading: false,
          isAuthenticated: completed,
        });
      },
    );

    return () => {
      getAuthUser();
    };
  }, []);

  const getProvider = (providerName) => {
    switch (providerName) {
      case 'google': {
        return googleAuthProvider;
      }
      case 'facebook': {
        return facebookAuthProvider;
      }
      case 'twitter': {
        return twitterAuthProvider;
      }
      case 'github': {
        return githubAuthProvider;
      }
      default:
        return googleAuthProvider;
    }
  };

  const signInWithPopup = async (providerName) => {
    dispatch({type: FETCH_START});
    try {
      const {user} = await auth.signInWithPopup(getProvider(providerName));
      jwtAxios
        .post('/users/firebaseuserdata', {user, providerName})
        .then((data) => {
          console.log('Firebase user ', data);
        })
        .catch((error) => {
          console.log('Firebase user ', error);
        });
      setFirebaseData({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      dispatch({type: FETCH_SUCCESS});
    } catch (error) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };

  const signInWithEmailAndPassword = async ({email, password}) => {
    dispatch({type: FETCH_START});
    try {
      const {user} = await auth.signInWithEmailAndPassword(email, password);
      jwtAxios
        .post('/users/firebaseuserdata', {user: {email}})
        .then((data) => {
          console.log('Firebase user ', data);
        })
        .catch((error) => {
          console.log('Firebase user ', error);
        });
      setFirebaseData({user, isAuthenticated: true, isLoading: false});
      dispatch({type: FETCH_SUCCESS});
    } catch (error) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
  const createUserWithEmailAndPassword = async ({
    name,
    email,
    password,
    phoneNumbr,
  }) => {
    dispatch({type: FETCH_START});
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser.sendEmailVerification({
        url: window.location.href,
        handleCodeInApp: true,
      });
      await auth.currentUser.updateProfile({
        displayName: name,
      });
      setFirebaseData({
        user: {...user, displayName: name},
        isAuthenticated: true,
        isLoading: false,
      });
      jwtAxios
        .post('/users/firebaseuserdata', {
          user: {email, displayName: name, phoneNumbr},
        })
        .then((data) => {
          console.log('Firebase user ', data);
        })
        .catch((error) => {
          console.log('Firebase user ', error);
        });
      dispatch({type: FETCH_SUCCESS});
    } catch (error) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };

  const logout = async () => {
    setFirebaseData({...firebaseData, isLoading: true});
    try {
      await auth.signOut();
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch (error) {
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <FirebaseActionsContext.Provider
        value={{
          signInWithEmailAndPassword,
          createUserWithEmailAndPassword,
          signInWithPopup,
          logout,
        }}
      >
        {children}
      </FirebaseActionsContext.Provider>
    </FirebaseContext.Provider>
  );
};
export default FirebaseAuthProvider;

FirebaseAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
