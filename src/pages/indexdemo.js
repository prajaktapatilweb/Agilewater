import React from 'react';
import AppPage from '../@crema/hoc/UserPage/index';
import asyncComponent from '../@crema/utility/asyncComponent';

const MainPage = asyncComponent(() => import('../modules/Indexfile1'));
export default AppPage(() => <MainPage />);