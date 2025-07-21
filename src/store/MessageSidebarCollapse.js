import { createSlice } from "@reduxjs/toolkit";

export const MessageSideBarCollapse = createSlice({
    name: 'message_side_bar_collapse',
    initialState: {
        isHidden: false,
    },
    reducers: {
        handleChange: (e) => {
            e.isHidden = !e.isHidden
        }
    }
})

export const { handleChange } = MessageSideBarCollapse.actions;
export default MessageSideBarCollapse.reducer