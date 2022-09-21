import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  likeList: [],
}

export const userSlice = createSlice({
  name: 'liked',
  initialState,
  reducers: {
    addLike(state, action) {
        state.likeList.push(action.payload)
    },
    removeLike(state, action) {
        state.likeList = state.likeList.filter((data: any) => {
            return data.login !== action.payload
        })
    },
    addLocalLike(state, action) {
      state.likeList = action.payload
    },
  },
})

export const { addLike, removeLike, addLocalLike } = userSlice.actions
export default userSlice.reducer