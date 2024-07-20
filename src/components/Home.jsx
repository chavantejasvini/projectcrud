import { Box, Button, Card, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import NavBar from './NavBar';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isDialogOpen,setIsDialogOpen] = 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/users');
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  const handleUpdate = (id) => {
    console.log(id);
    navigate(`/update-user/${id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then((res) => {
        console.log(res);
        setLoading(true); // Trigger data refetch
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  };

  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Card sx={{ height: '100vh', width: '90vw' }}>
          <NavBar />
          <Button
            variant='contained'
            color='success'
            sx={{ margin: '10px' }}
            onClick={() => navigate('/app-user')}
          >
            Add New User+
          </Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((e, idx) => (
                  <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="e">
                      {e.id}
                    </TableCell>
                    <TableCell align="right">{e.name}</TableCell>
                    <TableCell align="right">{e.email}</TableCell>
                    <TableCell align="right">{e.phone}</TableCell>
                    <TableCell align="right">
                      <DeleteIcon
                        sx={{ margin: '15px', cursor: 'pointer' }}
                        onClick={() => handleDelete(e.id)}
                      />
                      <EditNoteIcon
                        sx={{ margin: '15px', cursor: 'pointer' }}
                        onClick={() => handleUpdate(e.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      )}
    </>
  );
};

export default Home;
