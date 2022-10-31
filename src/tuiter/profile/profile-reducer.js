import { createSlice } from "@reduxjs/toolkit";

const profile = {
    "firstName": "Jifan",
    "lastName": "Xie",
    "handle": "jifan",
    "avatar": "avatar.jpg",
    "banner": "starship.jpeg",
    "bio": "Computer Science, Graduate student of Northeastern University",
    "website": 'youtube.com/webdevtv',
    "location": "Boston, MA",
    "dateOfBirth": "1999-05-01",
    "dateJoined": "2022-01",
    "followingCount": 340,
    "followersCount": 223
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        changeProfile(state, action) {

        }
    }

    // reducers: {
    //     deleteTuit(state, action) {
    //         const index = state
    //             .findIndex(post =>
    //                 post._id === action.payload);
    //         state.splice(index, 1);
    //     },
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id: (new Date()).getTime(),
    //         })
    //     }
    // }
});

export const {changeProfile} = profileSlice.actions;
export default profileSlice.reducer;