import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onDeleteIndivUserData, onGetUserList} from 'redux/actions';
import TopHeading from '../TopHeading';
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import {useJWTAuthUser} from '@crema/utility/AuthHooks';
import ContactGridItem from './ContactGridItem';
import AppGrid from '@crema/core/AppGrid';
import AppDialog from '@crema/core/AppDialog';
import {AppConfirmDialog} from '@crema';
import IntlMessages from '@crema/utility/IntlMessages';
import AddUserForm from './AddUserForm';

export default function View() {
  const dispatch = useDispatch();
  const {loading} = useJWTAuthUser;
  useEffect(() => {
    dispatch(onGetUserList());
  }, [dispatch]);
  const UserList = useSelector((state) => state?.User?.Userslist);

  const [selectedContact, setSelectedContact] = useState(null);

  // ***************** Delete Dialogue **************
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const toggleDeleteUserDialogue = () =>
    setDeleteDialogOpen(!isDeleteDialogOpen);
  const onSelectContactsForDelete = (contact) => {
    console.log('Delete', contact);
    setSelectedContact(contact);
    toggleDeleteUserDialogue();
  };
  const onConfirmdeleteUser = () => {
    console.log('Cofnrim Delete', selectedContact);
    dispatch(onDeleteIndivUserData(selectedContact.UserID));
    toggleDeleteUserDialogue();
  };
  // ************************* Edit Dialogue ******************
  const [isEditDialogueOpen, setisEditDialogueOpen] = useState(false);
  const toggleEditUserDialogue = () =>
    setisEditDialogueOpen(!isEditDialogueOpen);
  const onOpenEditContact = (contact) => {
    setSelectedContact(contact);
    toggleEditUserDialogue();
  };
  // For User Form
  const [addUserCardOpen, setaddUserCardOpen] = useState(false);
  const toggleAddUserForm = () => setaddUserCardOpen(!addUserCardOpen);
  return (
    <>
      <TopHeading title='List of Users' />
      <Container container display='flex' sx={{width: '100%'}}>
        {/* <pre>{JSON.stringify(UserList, null, 2)}</pre> */}
        <AppsContent>
          <Box
            display='flex'
            sx={{
              mt: {xs: 2, xl: 2},
              px: 5,
              pt: 0.5,
              pb: 3,
              boxShadow: 3,
              borderRadius: 5,
            }}
          >
            <Grid container justifyContent='space-between' spacing={2}>
              <Box
                m={3}
                sx={{width: 1, display: 'flex', justifyContent: 'right'}}
              >
                <Button
                  variant='contained'
                  onClick={toggleAddUserForm}
                  color={addUserCardOpen ? 'error' : 'primary'}
                >
                  {addUserCardOpen ? 'Cancel' : 'Add New User'}
                </Button>
              </Box>
              {addUserCardOpen && (
                <AddUserForm toggleAddUserForm={toggleAddUserForm} />
              )}
              {UserList && (
                <AppGrid
                  responsive={{xs: 1, sm: 2, md: 3, lg: 2, xl: 3}}
                  data={UserList}
                  renderRow={(user) => (
                    <ContactGridItem
                      key={user.UserID}
                      contact={user}
                      onOpenEditContact={onOpenEditContact}
                      onSelectContactsForDelete={onSelectContactsForDelete}
                    />
                  )}
                />
              )}
            </Grid>
          </Box>
        </AppsContent>
      </Container>
      <AppDialog
        maxWidth
        open={isEditDialogueOpen}
        onClose={toggleEditUserDialogue}
        title={`Edit the details of User ${selectedContact?.UserID}`}
      >
        <AddUserForm
          User={selectedContact}
          toggleAddUserForm={toggleEditUserDialogue}
        />
      </AppDialog>
      <AppConfirmDialog
        open={isDeleteDialogOpen}
        onDeny={toggleDeleteUserDialogue}
        onConfirm={onConfirmdeleteUser}
        title={
          <Typography variant='paragraph'>
            <IntlMessages id='common.delete' /> User ? <br /> <br />
            <b>User Name: </b>
            {selectedContact?.Name} <br />
            <b>Mobile Number:</b> {selectedContact?.Mobilenumber} <br />
            <b>Email ID:</b> {selectedContact?.Email}
          </Typography>
        }
        dialogTitle={`Delete the User ${selectedContact?.UserID}`}
      >
        <h>sds</h>
      </AppConfirmDialog>
    </>
  );
}
