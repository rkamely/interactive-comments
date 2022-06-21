/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../constants/Variables"



const bluBtn=css`
  width: 100px;
  outline: none;
  height: 40px;
  border: none;
  background-color: ${Variable.ModerateBlue};
  border-radius: ${Variable.BorderRadius};
  color: ${Variable.White};
  cursor: pointer;
transition: .25s;
  &:hover {
    opacity: .4;
  }
`

function BlueBtn({button}) {
    return (
            <button css={bluBtn} >{button}</button>
    );
}

export default BlueBtn;
