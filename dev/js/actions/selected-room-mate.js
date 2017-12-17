export const selectRoomMate = (roomMate,toogle) => {
    console.log("You clicked on roommate: ", roomMate.name,toogle);
    return {
        type: 'ROOM_MATE_SELECTED',
        payload: {roomMate,toogle}
    }
};
