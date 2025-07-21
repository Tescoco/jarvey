import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from './MenuSlice.js'
import MessageSidebarCollapse from './MessageSidebarCollapse.js'

export default configureStore({
    reducer: {
        menu: MenuSlice,
        toggle_left_bar: MessageSidebarCollapse
    }
})