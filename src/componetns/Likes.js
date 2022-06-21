/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../constants/Variables"
import {useDispatch} from "react-redux";
import {like, unLike,} from "../redux/action";


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
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    height: 40px;
    width: 100px;

  }
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


function Likes({score, id}) {

    const dispatch = useDispatch()
    const add = () => {
        dispatch(like(score, id))
    }
    const minus = () => {
        dispatch(unLike(score, id))
    }
    return (
        <div css={likes}>
            <div onClick={add}>+</div>
            <span>{score}</span>
            <div onClick={minus}>-</div>
        </div>
    )
        ;
}

export default Likes;
