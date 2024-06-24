import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import Business from "../classes/business";




import instance from '../auth0/interceptors'

const initialState = {
    business: {
        companyNumber: 0,
        description: " ",
        name: " ",
        email: " ",
        logo: " ",
        phone: " ",
        address: {
            city: " ",
            street: " ",
            num: " "
        },
        owner: " ",
        businessSize: " ",
        industryType: " ",
        establishmentDate: " "
    }
}


export const businessSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {
    }
});


export const createBusiness = createAsyncThunk('', async (_business:Business) => {
    try {
        
        const response = await instance.post('/business', _business);
        
        console.log(response.data);
         
        console.log(response.data);
        
        return response.data
    } catch (error: any) {
        if (error.response.data.statusCode == 400)
            alert(error.response.data.message);
        return error
    }
});


export default businessSlice.reducer;