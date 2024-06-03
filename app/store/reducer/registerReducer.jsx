import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        formInput: {
            firstName: null,
            sureName: null,
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
            formInput.firstName = action.payload;
        },
        setsureName: (state, action) => {
            formInput.sureName = action.payload;
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

export const { setfirstName, setsureName, setBirthDate, setEmail, setGender, setPassword } = registerSlice.actions

export default registerSlice.reducer;