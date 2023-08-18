import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onDeleteIndivCoachData, onGetCoachList} from 'redux/actions';
import TopHeading from '../../TopHeading';
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppGrid from '@crema/core/AppGrid';
import AppDialog from '@crema/core/AppDialog';
import {AppConfirmDialog} from '@crema';
import IntlMessages from '@crema/utility/IntlMessages';
import AppActionGridCard from '@crema/core/New/AppActionGridCard';
import CoachDetailData from './CoachDetailData';
import AddCoachForm from '../AddCoachForm';
// import AppGridCard from '@crema/core/New/AppGridCard/AppActionGridCard';

export default function List() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCoachList());
  }, [dispatch]);
  const CoachList = useSelector((state) => state?.Coach?.Coachlist);

  const [selectedContact, setSelectedContact] = useState(null);

  // ***************** Delete Dialogue **************
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const toggleDeleteCoachDialogue = () =>
    setDeleteDialogOpen(!isDeleteDialogOpen);
  const onSelectContactsForDelete = (contact) => {
    console.log('Delete', contact);
    setSelectedContact(contact);
    toggleDeleteCoachDialogue();
  };
  const onConfirmdeleteCoach = () => {
    console.log('Cofnrim Delete', selectedContact);
    dispatch(onDeleteIndivCoachData(selectedContact.CoachID));
    toggleDeleteCoachDialogue();
  };
  // ************************* Edit Dialogue ******************
  const [isEditDialogueOpen, setisEditDialogueOpen] = useState(false);
  const toggleEditCoachDialogue = () =>
    setisEditDialogueOpen(!isEditDialogueOpen);
  const onOpenEditContact = (contact) => {
    setSelectedContact(contact);
    toggleEditCoachDialogue();
  };
  // For User Form
  // const [addUserCardOpen, setaddUserCardOpen] = useState(false);
  // const toggleAddUserForm = () => setaddUserCardOpen(!addUserCardOpen);
  return (
    <>
      <TopHeading title='List of Coaches' />
      <Container container display='flex' sx={{width: '100%'}}>
        {/* <pre>{JSON.stringify(CoachList, null, 2)}</pre> */}
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
              {/* <Box
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
              )} */}
              {CoachList && (
                <AppGrid
                  responsive={{xs: 1, sm: 2, md: 3, lg: 2, xl: 3}}
                  data={CoachList}
                  renderRow={(coach, id) => (
                    <AppActionGridCard
                      key={coach.CoachID}
                      data={coach}
                      onClickButtonEdit={onOpenEditContact}
                      onClickButtonDelete={onSelectContactsForDelete}
                    >
                      <CoachDetailData coach={coach} key={id} />
                    </AppActionGridCard>
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
        onClose={toggleEditCoachDialogue}
        title={`Edit the details of User ${selectedContact?.CoachID}`}
      >
        <AddCoachForm
          CoachData={selectedContact}
          closefn={toggleEditCoachDialogue}
        />
      </AppDialog>
      <AppConfirmDialog
        open={isDeleteDialogOpen}
        onDeny={toggleDeleteCoachDialogue}
        onConfirm={onConfirmdeleteCoach}
        title={
          <Typography variant='paragraph'>
            <IntlMessages id='common.delete' /> Coach ? <br /> <br />
            <b>Coach Name: </b>
            {selectedContact?.CoachName} <br />
            <b>Country:</b> {selectedContact?.Country} <br />
            <b>Email ID:</b> {selectedContact?.Email}
          </Typography>
        }
        dialogTitle={`Delete the Coach ${selectedContact?.CoachID}`}
      ></AppConfirmDialog>
    </>
  );
}
