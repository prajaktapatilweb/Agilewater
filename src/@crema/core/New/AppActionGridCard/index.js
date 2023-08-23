import React, {Children} from 'react';
import {Card} from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import ItemMenu from './ItemMenu';
import {styled} from '@mui/material/styles';
import AppGrid from '@crema/core/AppGrid';

const GridCard = styled(Card)(({theme}) => {
  return {
    borderRadius: theme.cardRadius,
    border: `solid 1px ${theme.palette.grey[300]}`,
    position: 'relative',
    padding: 16,
    // cursor: 'pointer',
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

const AppActionGridCard = ({
  data,
  onClickButtonEdit,
  onClickButtonDelete,
  children,
}) => {
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
        <ItemMenu
          data={data}
          onClickButtonEdit={onClickButtonEdit}
          onClickButtonDelete={onClickButtonDelete}
        />
      </Box>
      {children}
    </GridCard>
  );
};

export default AppActionGridCard;

AppActionGridCard.propTypes = {
  data: PropTypes.object.isRequired,
  onClickButtonEdit: PropTypes.func,
  onClickButtonDelete: PropTypes.func,
  children: PropTypes.func,
};
