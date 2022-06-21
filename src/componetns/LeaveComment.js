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
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  margin: 15px auto;
  height: 180px;
  padding: 1em;
  background-color: ${Variable.White};
  border-radius: ${Variable.BorderRadius};
  @media (max-width: 768px) {
    align-items: stretch;
    justify-content: center;
  }

  > div {
 
    @media (max-width: 768px) {
   
    }

    > div {
      @media (max-width: 768px) {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

      }
    }
  }


  img {
    width: 3em;
    margin-right: 1em;
    @media (max-width: 768px) {
      width: 2.5em;
    }
  }

  textarea {
    width: 100%;
    border: ${Variable.MediumBorder};
    border-radius: ${Variable.BorderRadius};
    resize: none;
    padding: .5em;
    outline: none;
    margin-right: 1em;
    cursor: pointer;
    transition: .05s;
    @media (max-width: 768px) {
      width: 90%;
      margin: 0;
    }

    &:focus, &:hover {
      border: ${Variable.DarkBorder};

      ::placeholder {
        color: ${Variable.ModerateBlue};
      }
    }


  }
`
const desktopComment = css`
  display: flex;
  width: 100%;
  >textarea{
    height: 150px;

  }
 img {
   height: 3em;

 }
  @media (max-width: 768px) {
    display: none;
  }
`
const mobileComment = css`
  display: none;
  >textarea{
    height: 150px;

  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

function LeaveComment({button, currentUser, editText, userName, id, setReplyComment, setEditComment}) {
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
            dispatch(replyComment(newText, createDate, currentUser, userName, id))

        }
        if (button === "UPDATE" && newText) {
            setEditComment(false)
            dispatch(updateComment(newText, createDate, currentUser, userName, id))
        }

        setNewText("")
    }

    return (

        <form onSubmit={addCommentHandler} css={addComment}>
            <div css={desktopComment}>
                <img src={currentUser.image.png} alt="avatar"/>
                <textarea onChange={e => textCommentHandler(e)}
                          placeholder={"Leave your comment ..."} value={newText}>{editText}</textarea>
                <BlueBtn button={button}/>
            </div>

            <div css={mobileComment}>
                <textarea onChange={e => textCommentHandler(e)}
                          placeholder={"Leave your comment ..."} value={newText}>{editText}</textarea>
                <div>
                    <img src={currentUser.image.png} alt="avatar"/>
                    <BlueBtn button={button}/>
                </div>
            </div>
        </form>

    );
}

export default LeaveComment;
