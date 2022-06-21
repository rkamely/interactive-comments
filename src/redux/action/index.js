import * as types from "./actionType";

export const addNewComment = (newText, createDate,currentUser) => ({
    type: types.ADD_NEW_COMMENT,
    payload: {
        newText: newText,
        createDate: createDate,
        currentUser:currentUser,
    }
})
export const replyComment = (newText, createDate,currentUser,userName,id) => ({
    type: types.REPLY_COMMENT,
    payload: {
        newText: newText,
        createDate: createDate,
        currentUser:currentUser,
        userName:userName,
        id:id
    }
})
export const updateComment = (newText, createDate,currentUser,userName,id) => ({
    type: types.UPDATE_COMMENT,
    payload: {
        newText: newText,
        createDate: createDate,
        currentUser:currentUser,
        userName:userName,
        id:id,
    }
})
export const deleteComment = (id) => ({
    type: types.DELETE_COMMENT,
    payload: {
        id:id,
    }
})
export const like = (score,id) => ({
    type: types.LIKE,
    payload: {
        score:score,
        id:id,
    }
})
export const unLike = (score,id) => ({
    type: types.UNLIKE,
    payload: {
        score:score,
        id:id,
    }
})

