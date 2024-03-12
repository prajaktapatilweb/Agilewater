import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Typography} from '@mui/material';
import {RiUpload2Fill} from 'react-icons/ri';
import {FaRupeeSign} from 'react-icons/fa';
import moment from 'moment';
import {Edit} from '@mui/icons-material';

// function createData(name, calories, fat, carbs, protein) {
//   return {name, calories, fat, carbs, protein};
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CouponPage({rows,setOpen,setselectedCoupon}) {
  console.log('TTTT', rows);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Applicable Code</b>
              </TableCell>
              <TableCell>
                <b>Discount Type</b>
              </TableCell>
              <TableCell align='right'>
                <b>Code Used/Total</b>
              </TableCell>
              <TableCell align='right'>
                <b>Discount Applicable</b>
              </TableCell>
              <TableCell align='right'>
                <b>Expires On</b>
              </TableCell>
              <TableCell>
                <b>Applicable to</b>
              </TableCell>
              <TableCell>
                <b>Active / Inactive</b>
              </TableCell>
              <TableCell align='right'>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.CouponID}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component='th' scope='row'>
                  {row.DiscountCode}
                </TableCell>
                <TableCell align='left'>{row.DiscountType}</TableCell>
                <TableCell align='right'>
                  {row.UsedTimes ? row.UsedTimes : 0} /{row.NumberofTimes}
                </TableCell>
                <TableCell align='right'>
                  {row.DiscountAmountType === 'Percentage' ? null : (
                    <FaRupeeSign />
                  )}
                  {row.DiscountAmount}
                  {row.DiscountAmountType === 'Percentage' ? '%' : null}
                </TableCell>
                <TableCell align='right'>
                  {moment(row.CouponEndDate).format('DD MMMM YY @ HH:mm')}
                </TableCell>
                <TableCell align='left'>
                  {row.TicketType[0]},{row?.TicketType[1]}
                </TableCell>
                <TableCell align='left'>{row.Status}</TableCell>
                <TableCell align='left'>
                  <Button
                    variant='outlined'
                    onClick={() => {
                      setselectedCoupon(row.CouponID);
                      setOpen(true);
                    }}
                    startIcon={<Edit />}
                    color='primary'
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
