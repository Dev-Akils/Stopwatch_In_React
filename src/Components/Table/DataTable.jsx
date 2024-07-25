// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField, Paper } from '@mui/material';
// import { FaEdit } from "react-icons/fa";
// // npm install @mui/material @emotion/react @emotion/styled
// const DataTable = ({ data }) => {
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//     setPage(0);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const filteredData = data.filter((row) =>
//     Object.values(row).some((value) =>
//       String(value).toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   return (
//     <Paper>
//       <TextField
//         label="Search"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={search}
//         onChange={handleSearchChange}
//       />
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>UID</TableCell>
//               <TableCell>Country</TableCell>
//               <TableCell>Register On</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Manage</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//               <TableRow key={row.id}>
//                 {/* <TableCell>{page * rowsPerPage + row+ 1}</TableCell> */}
//                 {/* {data.map((row, rowIndex) => (
//           <TableRow key={rowIndex}>
//             {row.map((value, cellIndex) => (
//               <TableCell key={cellIndex}>{value + 1}</TableCell>
//             ))}
//           </TableRow>
//         ))} */}
//                 <TableCell>{row.username}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//                 <TableCell>{row.unique_id}</TableCell>
//                 <TableCell>{row.unique_id}</TableCell>
//                 <TableCell>{row.createdAt}</TableCell>
//                 <TableCell>{row.createdAt}</TableCell>
//                 <TableCell>{row.createdAt}</TableCell>
//                 <TableCell><FaEdit /></TableCell>
                
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         component="div"
//         count={filteredData.length}
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         rowsPerPageOptions={[5, 10, 25]}
//       />
//     </Paper>
//   );
// };

// export default DataTable;
