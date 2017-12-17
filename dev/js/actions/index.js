export const selectUser = (user,toogle) => {
    console.log("You clicked on user: ", user.first,toogle);
    return {
        type: 'USER_SELECTED',
        payload: {user,toogle}
    }
};
