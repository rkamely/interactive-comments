/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../constants/Variables"
import reply from "../assets/icon-reply.svg"
import remove from "../assets/icon-delete.svg"
import edit from "../assets/icon-edit.svg"
import Likes from "./Likes";
import LeaveComment from "./LeaveComment";
import {deleteComment} from "../redux/action";
import {useDispatch} from "react-redux";


const postContent = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Variable.White};
  border-radius: ${Variable.BorderRadius};
  padding: 1em;
  margin: auto;
  min-height: 180px;
`
const contentPost = css`
  width: 100%;

  > p {
    color: ${Variable.GrayishBlue};
    margin-top: 1.5em;
  }
`
const headerPost = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > :nth-child(1) {
    display: flex;

    align-items: center;

    > * {
      margin-right: .75em;
    }

    img {
      width: 2em;
    }

    > :nth-child(2) {
      color: ${Variable.ModerateBlue};
      font-weight: 1000;
    }

    > :nth-child(3) {
      color: ${Variable.GrayishBlue};
    }
  }

`
const deleteAndEditIcon = css`
  display: flex;
  align-items: center;
  cursor: pointer;


  > :nth-child(1), > :nth-child(2) {
    transition: .25s;
    margin-right: .5em;

    > * {
      margin-right: .5em;
      font-weight: 1000;

    }

    &:hover {
      opacity: 40%;
    }
  }

  > :nth-child(1) {
    > span {
      color: ${Variable.SoftRed}
    }
  }

  > :nth-child(2) {
    > span {
      color: ${Variable.ModerateBlue};
    }
  }
`
const replyIcon = css`
  cursor: pointer;
  transition: .25s;

  &:hover {
    opacity: 40%;
  }

  > * {
    margin-right: .5em;
    font-weight: 1000;
    color: ${Variable.ModerateBlue};
  }
`

function PostCard({content, user, createdAt, score, currentUser, id, replyAble}) {

    const [replyComment, setReplyComment] = useState(false)
    const replyCommentHandler = () => setReplyComment(!replyComment)
    const [editComment, setEditComment] = useState(false)
    const editCommentHandler = () => setEditComment(!editComment)
    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(deleteComment(id))
    }
    const iconHandler = () => {
        if (currentUser && currentUser.username === user.username) {
            return (<div css={deleteAndEditIcon}>
                <div onClick={deleteHandler}>
                    <img src={remove} alt=""/>
                    <span>Delete</span>
                </div>
                <div onClick={editCommentHandler}>
                    <img src={edit} alt=""/>
                    <span>Edit</span>
                </div>
            </div>)
        } else if (replyAble) {
            return (<div css={replyIcon} onClick={replyCommentHandler}>
                <img src={reply} alt="reply"/>
                <span>Reply</span>
            </div>)
        }
    }
    let now = new Date().getTime()
    let convertToDay = (now - createdAt) / (1000 * 60 * 60 * 24)
    const cratedDate = () => {
        if (convertToDay < .01) {
            return "Now"
        } else if (convertToDay < 1) {
            return "Today"
        } else if (convertToDay < 2) {
            return "1 day ago"
        } else if (convertToDay < 3) {
            return "2 day ago"
        } else if (convertToDay < 7) {
            return "1 week ago"
        } else if (convertToDay < 14) {
            return "2 week ago"
        } else if (convertToDay < 31) {
            return "1 month ago"
        } else if (NaN) {
            return createdAt
        } else {
            return "Old post"
        }

    }


    return (
        <>
            <div css={postContent}>
                <Likes score={score} id={id}/>
                <div css={contentPost}>
                    <div css={headerPost}>
                        <div>
                            <img src={user.image.png} alt="avatar"/>
                            <span>{user.username}</span>
                            <span>{cratedDate()}</span>
                        </div>
                        <div>
                            {iconHandler()}
                        </div>
                    </div>
                    <p>{content}</p>
                </div>
            </div>
            {(replyComment || editComment) ?
                <LeaveComment button={`${editComment ? "UPDATE" : "REPLY"}`} currentUser={currentUser}
                              editText={editComment ? content : null} setReplyComment={setReplyComment}
                              setEditComment={setEditComment} userName={user.username} id={id}/> : null}
        </>

    )
        ;
}

export default PostCard;
