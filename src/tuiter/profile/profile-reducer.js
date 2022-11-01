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
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.bio = action.payload.bio
            state.website = action.payload.website
            state.location = action.payload.location
            state.dateOfBirth = action.payload.dateOfBirth
        }
    }
});

export const {changeProfile} = profileSlice.actions;
export default profileSlice.reducer;