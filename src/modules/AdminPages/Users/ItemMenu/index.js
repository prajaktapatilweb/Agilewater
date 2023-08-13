import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AppTooltip from '@crema/core/AppTooltip';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import {useDispatch} from 'react-redux';
import AppDialog from '@crema/core/AppDialog';
import {Badge} from '@mui/material';

const ContactActionHoverWrapper = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: -30,
    top: '50%',
    zIndex: 1,
    transform: 'translateY(-50%)',
    transition: 'all 0.4s ease',
    opacity: 0,
    visibility: 'hidden',
  };
});

const ItemMenu = (props) => {
  const {onSelectContactsForDelete, contact, onOpenEditContact} = props;

  const onDeleteContact = (e) => {
    onSelectContactsForDelete(contact);
    e.stopPropagation();
  };

  const onClickEditOption = (e) => {
    console.log('Edit button clicked', contact);
    onOpenEditContact(contact);
    e.stopPropagation();
  };

  return (
    <Box
      component='span'
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        position: 'relative',
      }}
    >
      <span className='conActionHoverHideRoot'>
        <AppTooltip title={<IntlMessages id='common.more' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
              padding: 2,
              '& .MuiSvgIcon-root': {
                fontSize: 22,
              },
            }}
            size='large'
          >
            <MoreVertIcon />
          </IconButton>
        </AppTooltip>
      </span>

      <ContactActionHoverWrapper className='conActionHoverRoot'>
        <IconButton
          sx={{
            color: (theme) => theme.palette.primary.dark,
            padding: 2,
            '& .MuiSvgIcon-root': {
              fontSize: 22,
            },
          }}
          onClick={onClickEditOption}
          size='large'
        >
          <EditOutlinedIcon />
        </IconButton>

        <IconButton
          sx={{
            color: (theme) => theme.palette.error.main,
            padding: 2,
            '& .MuiSvgIcon-root': {
              fontSize: 22,
            },
          }}
          onClick={onDeleteContact}
          size='large'
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </ContactActionHoverWrapper>
      {/* <AppDialog
        sxStyle={{
          '& .btn-action-view': {
            opacity: 1,
            visibility: 'visible',
          },
        }}
        onClose={ScheduleDemo}
        open={isFindTeacherOpen}
        title='View Student Details'
        maxWidth
      >
        <DataGridTeacher
          studentdata={{
            Grade: contact.Grade,
            Subject: contact.Subjects[0],
          }}
          searchSID='true'
          flagAssigneTeacher='false'
          toggleFindTeacher={ScheduleDemo}
        />
      </AppDialog> */}
    </Box>
  );
};

export default ItemMenu;

ItemMenu.propTypes = {
  onSelectContactsForDelete: PropTypes.func,
  contact: PropTypes.object.isRequired,
  onOpenEditContact: PropTypes.func,
};
