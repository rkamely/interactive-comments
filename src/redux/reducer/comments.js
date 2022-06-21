import {ADD_NEW_COMMENT, DELETE_COMMENT, LIKE, REPLY_COMMENT, UNLIKE, UPDATE_COMMENT} from "../action/actionType";
import data from "../../assets/data.json"

let initialState;

if (localStorage.getItem('state') !== null) {
    initialState = JSON.parse(localStorage.getItem('state'));

} else {
    initialState = {data}
}

const comments = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_COMMENT :
            let newComment = {
                id: action.payload.createDate,
                content: action.payload.newText,
                createdAt: `${action.payload.createDate}`,
                replies: [],
                score: 0,
                user: action.payload.currentUser,
            }

            return {
                ...state,
                data: {
                    comments: [
                        ...state.data.comments,
                        newComment
                    ],
                    currentUser: state.data.currentUser,

                },
            }
        case REPLY_COMMENT :
            let newReply = {
                id: action.payload.createDate,
                content: action.payload.newText,
                createdAt: `${action.payload.createDate}`,
                score: 0,
                replyingTo: action.payload.userName,
                user: action.payload.currentUser,
            }
            let newState = state.data.comments.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        ...item.replies,
                        replies: [
                            ...item.replies,
                            newReply
                        ],
                    }
                } else {
                    return item
                }
            })
            return {
                ...state,
                data: {
                    comments: newState,
                    currentUser: state.data.currentUser,

                }
            }
        case UPDATE_COMMENT :
            let checkComments = state.data.comments.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        content: action.payload.newText
                    }
                } else {
                    return item
                }
            })
            let checkReply = checkComments.map(item => {
                item.replies.map(item => {
                    if (item.id === action.payload.id) {
                        item.content = action.payload.newText
                    }
                })
                return item
            })
            return {
                ...state,
                data: {
                    comments: checkReply,
                    currentUser: state.data.currentUser,

                }
            }
        case DELETE_COMMENT :
            let comments = state.data.comments.filter(item => item.id !== action.payload.id)
            comments = comments.map(item => {
                return {
                    ...item,
                    replies: item.replies.filter(item => item.id !== action.payload.id)
                }
            })
            return {
                ...state,
                data: {
                    comments: comments,
                    currentUser: state.data.currentUser,
                }
            }
        case LIKE :
            let likes = state.data.comments.map(item => {
                if (item.id === action.payload.id) return {
                    ...item,
                    score: ++item.score
                }
                else return item
            })

         let repliedLikes= likes.map(item => {
             item.replies.map(item => {
                 if (item.id === action.payload.id) {
                     item.score = ++item.score
                 }
             })
             return item
         })

            return {
                ...state,
                data: {
                    comments: repliedLikes,
                    currentUser: state.data.currentUser,
                }

            }
        case UNLIKE :
            let unLike = state.data.comments.map(item => {
                if (item.id === action.payload.id) return {
                    ...item,
                    score: --item.score
                }
                else return item
            })

            let repliedUnLikes= unLike.map(item => {
                item.replies.map(item => {
                    if (item.id === action.payload.id) {
                        item.score = --item.score
                    }
                })
                return item
            })

            return {
                ...state,
                data: {
                    comments: repliedUnLikes,
                    currentUser: state.data.currentUser,
                }

            }

        default:
            return state;
    }
}

export default comments;