/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../Constants/Variables"
import PostCard from "../Componetns/PostCard";
import LeaveComment from "../Componetns/LeaveComment";
import data from "../Assets/data.json"


const HomeCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Variable.VeryLightGray};
  padding: 5em 5%;
  @media (max-width: 768px) {
  }

  > * {
    width: 60%;
    margin: 15px auto;

  }
`
const replies = css`
  display: flex;
  margin: auto;

  > :nth-child(1) {
    width: 1px;
    background-color: ${Variable.LightGray};
    margin: 15px 5%;
  }
  > :nth-child(2) {
    display: flex;
    flex-direction: column;
    > * {
      margin-top: 30px;
    }
  }
`


function Home() {
    return (
        <section css={HomeCSS}>
            {data.comments.length > 0 ? data.comments.map(item => (

                <div key={item.id}>
                    <PostCard content={item.content}/>

                    {item.replies.length > 0 ?
                        (
                            <div css={replies}>
                                <div/>
                                <div>
                                    {item.replies.map(item => (
                                        <div key={item.id}>
                                            <PostCard content={item.content}/>
                                        </div>)
                                    )}
                                </div>
                            </div>
                        )
                        : null}


                </div>)) : null}

            <LeaveComment button={"SEND"}/>
        </section>
    );
}

export default Home;
