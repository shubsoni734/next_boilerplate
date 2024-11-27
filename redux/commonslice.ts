import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteMemory {
    enable: boolean,
    address: string,
    answer: boolean,
    id: string
}

interface popupMemory {
    enable: boolean,
    address: string,
    subAddress: string,
    type: string,
    initialValue: any
}
interface TypeOFinitialState {
    LoaderMemory: { enable: boolean },
    deleteMemory: deleteMemory,
    PopupMemory: popupMemory,
}

const initialState: TypeOFinitialState = {
    LoaderMemory: {
        enable: false,
    },
    deleteMemory: {
        enable: false,
        address: '',
        answer: false,
        id: ''
    },
    PopupMemory: {
        enable: false,
        address: '',
        subAddress: '',
        type: 'new',
        initialValue: ''
    },

}
export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        LoaderAction: (state, action: PayloadAction<any>) => { state.LoaderMemory = action.payload },
        deleteAction: (state, action: PayloadAction<any>) => { state.deleteMemory = action.payload },
        PopupAction: (state, action: PayloadAction<any>) => { state.PopupMemory = action.payload },
    }
})

export const { deleteAction, LoaderAction, PopupAction } = commonSlice.actions;
export default commonSlice.reducer;