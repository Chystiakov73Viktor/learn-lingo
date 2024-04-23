export const selectUser = (state) => state.users.userName;
export const selectUserObject = (state) => state.users.user;
export const selectUserAvatar = (state) => state.users.avatarURL;
export const selectUserIsSignIn = (state) => state.users.isSignin;
export const selectUsersError = (state) => state.users.error;
export const selectUsersIsLoading = (state) => state.users.isLoading;
export const selectUsersIsRefreshing = (state) => state.users.isRefreshing;
export const selectUserToken = (state) => state.users.userToken;