import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AddressForm = {
  country: string;
  state: string;
  city: string;
  zipCode: number;
  street: string;
};

export type UserForm = {
  name: string;
  role: "customer" | "careTaker";
  age: number;
};

interface State {
  currentPage: number;
  address: AddressForm;
  user: UserForm;
}

const initialState: State = {
  currentPage: 1,
  address: {
    country: "India",
    city: "Chennai",
    state: "Tamilnadu",
    zipCode: 600118,
    street: "A.V Corner street",
  },
  user: {
    name: "Vicky",
    role: "customer",
    age: 19,
  },
};

const createAccountSlice = createSlice({
  name: "createAccountSlice",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setAddress: (state, action: PayloadAction<AddressForm>) => {
      state.address = action.payload;
    },
    setUser: (state, action: PayloadAction<UserForm>) => {
      state.user = action.payload;
    },
  },
});

export const { setPage, setAddress, setUser } = createAccountSlice.actions;
export default createAccountSlice.reducer;
