import { Box, FormControl, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../App/Store";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchData,
    fetchDataById,
    putRequest,
} from "../Features/Crud/crudSlice";

const Edit = () => {
    const [editData, setEditData] = useState({
        id: 0,
        mobile: "",
        email: "",
        address: "",
    });
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { users } = useSelector((state: RootState) => state.user);

    const { id } = useParams();

    // Fetch data by Id
    let res = users.find((obj) => obj.id === Number(id));

    useEffect(() => {
        
        if (res)
            setEditData({
                ...editData,
                id: res.id,
                mobile: res.mobile,
                address: res.address,
                email: res.email
            });
        dispatch(fetchData());
    }, [dispatch]);

    const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditData({ ...editData, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
        console.log(editData);
        let newDate = new Date().toISOString();
        let updateData = { ...editData, updatedDate: newDate, createdDate:res?.createdDate };
        dispatch(putRequest(updateData));
        navigate("/");
    };
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FormControl>
                <Typography component={"h1"}>Create a New User</Typography>
                <label htmlFor="username">Mobile: </label>
                <input
                    type="text"
                    id="username"
                    name="mobile"
                    value={editData.mobile}
                    onChange={handleUpdate}
                    placeholder="Enter mobile..."
                />
                <br />

                <label htmlFor="Address">Address: </label>
                <input
                    type="text"
                    id="email"
                    name="address"
                    value={editData.address}
                    onChange={handleUpdate}
                    placeholder="Enter address.."
                />
                <br />

                <label htmlFor="Email">Email: </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={editData.email}
                    onChange={handleUpdate}
                    placeholder="Enter password..."
                />
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </FormControl>
        </Box>
    );
};

export default Edit;
