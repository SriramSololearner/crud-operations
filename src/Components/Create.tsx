import { Box, FormControl, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../App/Store";
import { postRequest, fetchData } from "../Features/Crud/crudSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [data, setData] = useState({
        id: 0,
        mobile: '',
        email: '',
        address: '',
    });

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const userId = useId()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])


    // Handle Click Event

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [event.target.name]: event.target.value });

    };

    const handleSubmit = () => {
        let newDate = new Date().toISOString();
        // const id = Math.floor(Math.ceil(Math.random() * 100)) + 1
        // const id = userId
        console.log(typeof userId, userId)
        let newData = { ...data, createdDate: newDate, updatedDate: newDate, }
        dispatch(postRequest(newData))

        dispatch(fetchData())
        navigate('/')
    }


    return (
        <Box sx={{ display: "flex", justifyContent: 'center' }}>
            <FormControl>
                <Typography component={'h1'}>Create a New User</Typography>
                <label htmlFor="username">Mobile: </label>
                <input type='text' id='username' name='mobile'
                    onChange={handleClick}
                    placeholder='Enter mobile...' /><br />

                <label htmlFor="Address">Address: </label>
                <input type='text' id='email' name='address'
                    onChange={handleClick}
                    placeholder='Enter address..' /><br />


                <label htmlFor="Email">Email: </label>
                <input type='text' id='email' name='email'
                    onChange={handleClick}
                    placeholder='Enter password...' /><br />
                <button  onClick={handleSubmit} >Submit</button>

            </FormControl>

        </Box>
    );
};

export default Create;
