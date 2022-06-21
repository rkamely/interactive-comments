/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../constants/Variables"
import BlueBtn from "./BlueBtn";
import {useDispatch} from "react-redux";
import {addNewComment, replyComment, updateComment} from "../redux/action";


const addComment = css`
  display: flex;
  align-items: flex-start;
  margin: 15px auto;
  height: 180px;
  padding: 1em;
  background-color: ${Variable.White};
  border-radius: ${Variable.BorderRadius};

  img {
    width: 3em;
    margin-right: 1em;
  }

  textarea {
    width: 80%;
    border: ${Variable.MediumBorder};
    border-radius: ${Variable.BorderRadius};
    resize: none;
    padding: .5em;
    outline: none;
    height: 80%;
    margin-right: 1em;
    cursor: pointer;
    transition: .05s;

    &:focus, &:hover {
      border: ${Variable.DarkBorder};

      ::placeholder {
        color: ${Variable.ModerateBlue};
      }
    }


  }
`

function LeaveComment({button, currentUser, editText, userName,id, setReplyComment, setEditComment}) {
    const [newText, setNewText] = useState(editText)

    const textCommentHandler = (e) => {
        setNewText(e.target.value)

    }

    const dispatch = useDispatch()
    const addCommentHandler = (e) => {
        let createDate = new Date().getTime()

        e.preventDefault()
        if (button === "SEND" && newText) {
            dispatch(addNewComment(newText, createDate, currentUser))

        }
        if (button === "REPLY" && newText) {
            setReplyComment(false)
            dispatch(replyComment(newText, createDate, currentUser, userName,id))

        }
        if (button === "UPDATE" && newText ) {
            setEditComment(false)
            dispatch(updateComment(newText, createDate, currentUser,userName, id))
        }

        setNewText("")
    }
    return (

        <form onSubmit={addCommentHandler} css={addComment}>
            <img src={currentUser.image.png} alt="avatar"/>
            <textarea onChange={e => textCommentHandler(e)}
                      placeholder={"Leave your comment ..."} value={newText}>{editText}</textarea>
            <BlueBtn button={button}/>
        </form>

    );
}

export default LeaveComment;
