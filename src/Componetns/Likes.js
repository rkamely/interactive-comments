/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../Constants/Variables"


const likes = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${Variable.VeryLightGray};
  height: 100px;
  padding: .2em .7em;
  border-radius: ${Variable.BorderRadius};
  margin-right: 1em;

  > span {
    color: ${Variable.ModerateBlue};
    font-weight: 1000;

  }


  > div {
    color: ${Variable.LightGrayishBlue};
    cursor: pointer;
    transition: .25s;
    text-align: center;
    font-weight: 1000;
    font-size: 1.1em;
    padding: .3em;

    &:hover {
      color: ${Variable.ModerateBlue};
    }
  }

`


function Likes() {
    const [likeCounter, setLikeCounter] = useState(0)
    const addLikeHandler = () => setLikeCounter(likeCounter + 1)
    const reduceLikeHandler = () => setLikeCounter(likeCounter - 1)

    return (
        <div css={likes}>
            <div onClick={addLikeHandler}>+</div>
            <span>{likeCounter}</span>
            <div onClick={reduceLikeHandler}>-</div>
        </div>
    )
        ;
}

export default Likes;
