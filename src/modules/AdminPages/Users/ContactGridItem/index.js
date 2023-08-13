import React from 'react';
import {Card} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {blue} from '@mui/material/colors';
import {Fonts} from 'shared/constants/AppEnums';
import ItemMenu from '../ItemMenu';

import {styled} from '@mui/material/styles';
import {EmailOutlined} from '@mui/icons-material';

const GridCard = styled(Card)(({theme}) => {
  return {
    borderRadius: theme.cardRadius,
    border: `solid 1px ${theme.palette.grey[300]}`,
    position: 'relative',
    padding: 16,
    cursor: 'pointer',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      padding: 20,
    },
    '&:hover': {
      '& .conActionHoverRoot': {
        opacity: 1,
        visibility: 'visible',
        right: 0,
      },
      '& .conActionHoverHideRoot': {
        opacity: 0,
        visibility: 'hidden',
      },
    },
  };
});

const ContactGridItem = (props) => {
  const {
    contact,
    checkedContacts,
    // onChangeStarred,
    onSelectContactsForDelete,
    onOpenEditContact,
    // onViewContactDetail,
    // onOpenCallingDetail,
  } = props;

  return (
    <GridCard
      className='card-hover'
      // onClick={() => onViewContactDetail(contact)}
    >
      <Box
        sx={{
          mb: 1,
          mt: -3,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* <Box
          sx={{
            ml: -2,
          }}
          component='span'
          onClick={(event) => event.stopPropagation()}
        >
          <Checkbox
            checked={checkedContacts.includes(contact.UserID)}
            onChange={(event) =>
              onChangeCheckedContacts(event, contact.UserID)
            }
            color='primary'
          />
        </Box> */}

        <ItemMenu
          contact={contact}
          // onChangeStarred={onChangeStarred}
          onOpenEditContact={onOpenEditContact}
          onSelectContactsForDelete={onSelectContactsForDelete}
          // onOpenCallingDetail={onOpenCallingDetail}
        />
      </Box>

      <Box
        sx={{
          mb: {xs: 3, lg: 4, xl: 5},
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {contact.Avatar ? (
          <Avatar
            sx={{
              width: 46,
              height: 46,
              backgroundColor: blue[500],
            }}
            src={contact.Avatar}
          />
        ) : (
          <Avatar
            sx={{
              width: 46,
              height: 46,
              backgroundColor: blue[500],
            }}
          >
            {contact.Name[0].toUpperCase()}
          </Avatar>
        )}
        <Box
          sx={{
            ml: 4,
            width: 'calc(100% - 65px)',
          }}
        >
          <Box
            component='p'
            sx={{
              fontWeight: Fonts.MEDIUM,
              fontSize: 14,
            }}
          >
            {contact.UserID}
          </Box>
          <Box
            component='p'
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {contact.Name}
          </Box>

          <Box
            component='p'
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {contact.Role}
          </Box>
          {/* <Box
            component='p'
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {contact.Status}
          </Box> */}
        </Box>
      </Box>

      <Box
        sx={{
          pt: 2,
          fontSize: 13,
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          sx={{
            py: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <EmailOutlined
            sx={{
              fontSize: 20,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
            component='p'
          >
            {contact.Email}
          </Box>
        </Box>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <PhoneOutlinedIcon
            sx={{
              fontSize: 20,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
            component='p'
          >
            {contact.Mobilenumber}
          </Box>
        </Box>
      </Box>
    </GridCard>
  );
};

export default ContactGridItem;

ContactGridItem.defaultProps = {
  checkedContacts: [],
};

ContactGridItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onChangeCheckedContacts: PropTypes.func,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
  onViewContactDetail: PropTypes.func,
};
