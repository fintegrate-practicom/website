import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import workerInstance from "../auth0/WorkersInterceptors";
import { showErrorToast } from "../components/generic/errorMassage";
import { EmployeeRole } from "../modules/workers/classes/employeeRole";
import { statuses } from "../modules/workers/classes/enum/statuses.enum";

interface Address {
  city: string;
  street: string;
  num: number;
}
interface UserDetails {
  userName: string;
  userEmail: string;
  auth0_user_id: string;
  registeredAt: string;
  lastLogin: string;
  mobile: string;
  status: statuses;
  dateOfBirth: string;
  address: Address;
  data?: any;
}
interface EmployeeDetails {
  id_user: string;
  businessId: string;
  code: string;
  createdBy: string;
  updatedBy: string;
  role: EmployeeRole;
  nameEmployee: string;
}
interface CurrentUser {
  employeeDetails: EmployeeDetails;
  userDetails: UserDetails;
}
const initialState: CurrentUser = {
  employeeDetails: {
    id_user: '',
    businessId: '',
    code: '',
    createdBy: '',
    updatedBy: '',
    role: new EmployeeRole('', true, ''),
    nameEmployee: '',
  },
  userDetails: {
    userName: '',
    userEmail: '',
    auth0_user_id: '',
    registeredAt: '',
    lastLogin: '',
    mobile: '',
    status: statuses.Married,
    dateOfBirth: '',
    address: {
      city: '',
      street: '',
      num: 0
    },
    data: {}
  }
};
export const fetchUserById = createAsyncThunk(
  'fetchUserById',
  async (payload: any, { dispatch }) => {
    try {
      const response = await workerInstance.get(`/user/${payload.identities[0].user_id}`);
      const data = response.data;
      if (data.data == null) {
        await dispatch(updateCurrentUserByJwt(payload));
      }
      const res = data.data;
      const mappedData: CurrentUser = {
        employeeDetails: {
          id_user: data._id || '',
          businessId: res.businessRoles && res.businessRoles.length > 0 ? res.businessRoles[0].businessId : '',
          code: '', 
          createdBy: '',
          updatedBy: '', 
          role: new EmployeeRole(res.businessRoles[0].role, true, ''), 
          nameEmployee: res.userName || '',
        },
        userDetails: {
          userName: res.userName || '',
          userEmail: res.userEmail || '',
          auth0_user_id: res.auth0_user_id || '',
          registeredAt: res.registeredAt || '',
          lastLogin: data.lastLogin || '',
          mobile: '', 
          status: statuses.Married, 
          dateOfBirth: '', 
          address: {
            city: '', 
            street: '', 
            num: 0, 
          },
          data: {}
        }
      };

      dispatch(currentUserSlice.actions.setCurrentUser(mappedData));
      return mappedData;
    } catch (error: any) {
      showErrorToast(error.message);
    }
  }
);
export const updateCurrentUser = createAsyncThunk(
  'updateCurrentUser',
  async (payload: any) => {
    const { auth0_user_id, updatedCurrentUser } = payload;
    try {
      const response = await workerInstance.put(`/user/${auth0_user_id}`, updatedCurrentUser);
      return response.data;
    } catch (error: any) {
      showErrorToast(error.message);
    }
  }
);
export const updateCurrentUserByJwt = createAsyncThunk(
  'updateCurrentUserByJwt',
  async (payload: any) => {
    try {
      const response = await workerInstance.put('/user/jwt', payload);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
);
const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<CurrentUser>) {
      return action.payload; 
    },
  },
});
export const selectCurrentUser = (state: RootState) => state.currentUserSlice;
export const selectCurrentUser = (state: RootState) => state.currentUserSlice.CurrentUser;
export default currentUserSlice.reducer;