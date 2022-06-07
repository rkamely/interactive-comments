/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../Constants/Variables"
import reply from "../Assets/icon-reply.svg"
import avatar from "../Assets/Avatars/image-amyrobson.png"
import Likes from "./Likes";
import LeaveComment from "./LeaveComment";

const postContent = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Variable.White};
  border-radius: ${Variable.BorderRadius};
  padding: 1em;
  margin: auto;
  min-height: 180px;
`
const contentPost = css`
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

  > :nth-child(2) {
    display: flex;
    align-items: center;
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
  }
`


function PostCard({content}) {
    const[comment,setComment]=useState(false)
    const commentHandler=()=>setComment(!comment)
    return (
     <>
         <div css={postContent}>
             <Likes/>
             <div css={contentPost}>
                 <div css={headerPost}>
                     <div>
                         <img src={avatar} alt="avatar"/>
                         <span>juliusomo</span>
                         <span>1 month ago</span>
                     </div>
                     <div onClick={commentHandler}>
                         <img src={reply} alt="reply"/>
                         <span>reply</span>
                     </div>
                 </div>
                 <p>{content}</p>
             </div>
         </div>
         {comment ? <LeaveComment button={"REPLY"}/> : null}
     </>

    )
        ;
}

export default PostCard;
