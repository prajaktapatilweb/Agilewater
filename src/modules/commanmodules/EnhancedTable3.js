import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button } from '@mui/material';
import AppDialog from '@crema/core/AppDialog';
import { useState } from 'react';
import AddCourseForm from 'modules/AdminPages/Course/AddCourseForm';
import DeleteDialoug from 'modules/AdminPages/Course/DeleteDialoug';
import CourseListButtons from './CourseListButtons';
import Link from 'next/link';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            // padding={headCell.disablePadding ? 'none' : 'normal'}
            // padding='none'
            padding='normal'
            sortDirection={orderBy === headCell.id ? order : false}
            colSpan={headCell.id === 'CostActual' ? 2 : 1}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  headCells: PropTypes.array.isRequired,
};

const EnhancedTableToolbar = ({ TableTitle }) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant='h6'
        id='tableTitle'
        component='div'
      >
        {TableTitle}
      </Typography>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  TableTitle: PropTypes.string.isRequired,
};
export default function EnhancedTable({
  rows,
  // headCells,
  TableTitle,
  mainColumn,
  orderByColumn,
  ActionLabel,
}) {
  var headCells = [
    {
      id: 'CourseName',
      numeric: false,
      label: 'Course',
    },
    {
      id: 'StartDate',
      numeric: false,
      label: 'Date',
    },
    {
      id: 'Place',
      numeric: false,
      label: 'City',
    },
    {
      id: 'Time',
      numeric: false,
      label: 'Time (IST)',
    },
    {
      id: 'ActualCost',
      numeric: false,
      label: 'Cost (INR)',
    },
    // {
    //   id: 'DiscountedCost',
    //   numeric: false,
    //   label: 'Cost (INR)',
    // },
    {
      id: 'Trainer',
      numeric: false,
      label: 'Trainer',
    },
    {
      id: 'action',
      numeric: false,
      label: 'Action',
    },
  ];
  // export default function EnhancedTable({ rows, headCells, TableTitle, mainColumn, orderByColumn, selectedRow, setSelectedRow, setisDialogOpen }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(orderByColumn);
  // const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [selectedRow, setSelectedRow] = useState();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const isSelected = (item) => selected.indexOf(item) !== -1;
  const isSelected = (item) => selectedRow && selectedRow[mainColumn] == item;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {/* <EnhancedTableToolbar TableTitle={TableTitle} /> */}

        <TableContainer>
          <Typography
            variant='h3'
            sx={{
              py: 4,
              textAlign: 'center',
              color: 'white',
              background: '#20509e',
            }}
          >
            {TableTitle}
          </Typography>
          <div id='cards'>
            <Table
              // sx={{ minWidth: 750 }}
              // aria-labelledby='tableTitle'
              // size={dense ? 'small' : 'medium'}
              // stickyHeader
              // aria-label='sticky table'

              id='table11'
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                headCells={headCells}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row[mainColumn]);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        // onClick={(event) => handleClick(event, row[mainColumn])}
                        role='checkbox'
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row[mainColumn]}
                        selected={isItemSelected}
                      >
                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='normal'
                        >
                          {row.CourseName}
                        </TableCell>
                        <TableCell align='left'>{row.Date}</TableCell>
                        <TableCell align='left'>{row.Place}</TableCell>
                        <TableCell align='left'>{row.Time}</TableCell>
                        <TableCell align='center'>
                          <Typography
                            variant='caption'
                            sx={{ textDecoration: 'line-through' }}
                            display='inline'
                          >
                            {row?.ActualCost}
                          </Typography>
                          <Typography variant='h2' display='inline'>
                            {' '}
                            {row?.DiscountedCost}
                          </Typography>
                        </TableCell>
                        {/* <TableCell align='left'>
                          <Typography variant='h1'>
                            {row?.DiscountedCost}
                          </Typography>
                        </TableCell> */}
                        <TableCell align='left'>
                          <Link
                            href={`/team/${row.Trainer.split('#')[0]}`.replace(
                              / /g,
                              '-',
                            )}
                          >
                            {row.Trainer.split('#')[1] ||
                              row.Trainer.split('#')[0]}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <CourseListButtons
                            ActionLabel={ActionLabel}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                            row={row}
                          />
                        </TableCell>
                        {/* {headCells.map((item) =>
                          item.id === mainColumn ? (
                            <TableCell
                              component='th'
                              id={labelId}
                              scope='row'
                              padding='normal'
                            >
                              {row[mainColumn]}
                            </TableCell>
                          ) : item.id === 'action' ? (
                            <TableCell>
                              <Button
                                variant='contained'
                                sx={{
                                  backgroundImage:
                                    'linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)',
                                }}
                                onClick={() => {
                                  // setSelected(row)
                                  setSelectedRow(row);
                                  setisDialogOpen(true);
                                }}
                              >
                                {row[item.id]}
                              </Button>
                            </TableCell>
                          ) : (
                            <TableCell align={item?.numeric ? 'right' : 'left'}>
                              {row[item.id]}
                            </TableCell>
                          ),
                        )} */}
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <td colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
EnhancedTable.propTypes = {
  rows: PropTypes.array,
  TableTitle: PropTypes.string,
  mainColumn: PropTypes.string,
  orderByColumn: PropTypes.string,
  ActionLabel: PropTypes.string,
  // children: PropTypes.node,
};
