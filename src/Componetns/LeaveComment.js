/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../Constants/Variables"
import avatar from "../Assets/Avatars/image-amyrobson.png";
import BlueBtn from "./BlueBtn";


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

function LeaveComment({button}) {
    return (

        <div css={addComment}>
            <img src={avatar} alt="avatar"/>
            <textarea placeholder={"Leave your comment ..."}/>
            <BlueBtn button={button}/>
        </div>

    );
}

export default LeaveComment;
