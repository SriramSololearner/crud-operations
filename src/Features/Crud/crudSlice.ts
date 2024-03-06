
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Istate {
    users: {
        id: number,
        mobile: string,
        email: string,
        address: string,
        createdDate: string,
        updatedDate: string
    }[],

    isLoading: boolean,
    error: string,
    status: string,
    Data: {
        id: number,
        mobile: string,
        email: string,
        address: string,
        createdDate: string,
        updatedDate: string
    },
}

const url = 'http://localhost:5000/users'

const initialState: Istate = {
    isLoading: false,
    users: [],
    error: "",
    status: "",

    Data: {
        id: 0,
        mobile: '',
        email: '',
        address: '',
        createdDate: '',
        updatedDate: ''
    }
}




const CrudSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userDeleted: (state, action) => {
            const { payload } = action

            const usr = state.users.find((user) => user.id === payload)
            if (usr) {
                state.users = state.users.filter(user => user.id !== payload)
            }

        }
    },

    extraReducers(builder) {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "success"
                state.isLoading = true;
                state.users = action.payload
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = "failed"
            })
    },
});

// Get all Users
export const fetchData = createAsyncThunk('users', async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
});

// Add new User
export const postRequest = createAsyncThunk('users/Post', async (data: Istate['Data']) => {
    console.log(data)
    const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const createData = await response.json()
    console.log(createData)
    return createData
});



// Delete Existing User

export const DeleteRequest = createAsyncThunk('users/delete/user', async (id: number) => {
    const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
    });
    return response
});


// Update user Data
export const putRequest = createAsyncThunk('users/update/user', async (data: any) => {

    const response = await fetch(`http://localhost:5000/users/${data.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data)
    })
    const createData = await response.json()
    return createData

});

// Get all Users
export const fetchDataById = createAsyncThunk('users', async (id: number) => {
    const response = await fetch(`http://localhost:5000/users/${id}`)
    const data = await response.json()
    return data
});



export const { userDeleted } = CrudSlice.actions
export default CrudSlice.reducer