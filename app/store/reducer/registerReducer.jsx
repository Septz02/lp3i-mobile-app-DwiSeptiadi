import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "register",
    initialState: {
        formInput: {
            name: null,
            gender: null,
            email: null,
            password: null,
            birthDate: null,
        },
        optGender: [
            { label: "Laki-laki", value: "L" },
            { label: "Perempuan", value: "P" },
        ],
    },
    reducers: {
        setName: (state, action) => {
            formInput.name = action.payload;
        },
        setGender: (state, action) => {
            formInput.gender = action.payload;
        },
        setEmail: (state, action) => {
            formInput.email = action.payload;
        },
        setPassword: (state, action) => {
            formInput.password = action.payload;
        },
        setBirthDate: (state, action) => {
            formInput.birthDate = action.payload;
        },
    },
});

export const { setName, setBirthDate, setEmail, setGender, setPassword } = counterSlice.actions

export default counterSlice.reducer;