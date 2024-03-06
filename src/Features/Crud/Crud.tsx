import { Box, Button, Paper, TableBody, Table } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../App/Store';
import { DeleteRequest, fetchData, putRequest } from "./crudSlice";
import { Styles } from "./Styles";
import { useNavigate } from "react-router-dom";


const Crud = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users } = useSelector((state: RootState) => state.user);
    const [id, setId] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch, id]);

    const handleDelete = (id: number) => {
        setId(id)
        dispatch(DeleteRequest(id))
        dispatch(fetchData())

    };

    const handleEdit = (userId: number) => {
        navigate(`/Edit/${userId}`)
    }



    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={Styles.table}>
                        <TableCell>Id</TableCell>
                        <TableCell align="right" >Email</TableCell>
                        <TableCell align="right">Mobile&nbsp;</TableCell>
                        <TableCell align="right">Address&nbsp;</TableCell>
                        <TableCell align="right">CreatedDate&nbsp;</TableCell>
                        <TableCell align="right">UpdatedDate&nbsp;</TableCell>
                        <TableCell align="right" >Opearations</TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>

                    {
                        users?.map((user) => (

                            <TableRow key={user.id}  >
                                <TableCell component="th" scope="row">{user.id}</TableCell>
                                <TableCell align="right">{user.email}&nbsp;</TableCell>
                                <TableCell align="right">{user.mobile}</TableCell>
                                <TableCell align="right">{user.address}</TableCell>
                                <TableCell align="right">{user.createdDate}</TableCell>
                                <TableCell align="right">{user.updatedDate}</TableCell>
                                <TableCell align="right"><Box>
                                    <Button onClick={() => handleDelete(user.id)}>Del</Button>
                                    <Button onClick={() => handleEdit(user.id)}>Edit</Button></Box></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default Crud;
