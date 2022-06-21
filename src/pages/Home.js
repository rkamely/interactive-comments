/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../constants/Variables"
import PostCard from "../componetns/PostCard";
import LeaveComment from "../componetns/LeaveComment";
import {useSelector} from "react-redux";


const HomeCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Variable.VeryLightGray};
  padding: 5rem 5%;
  @media (max-width: 768px) {
    padding: 1rem 3%;

  }

  > * {
    width: 60%;
    margin: 15px auto;
    @media (max-width: 768px) {
      width: 100%;


    }
  }
`
const replies = css`
  display: flex;
  margin: auto;
`
const firstChildReplies=css`
  width: 1px;
  background-color: ${Variable.LightGray};
  margin: 15px 5%;
  @media (max-width: 768px) {
    margin: 15px 4%;


  }
`
const secondChildReplies=css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  > * {
    margin-top: 30px;
  }
`

function Home() {
    const data = useSelector(state => state.comments.data)


    return (
        <section css={HomeCSS}>
            {data.comments.length > 0 ? data.comments.map(item => (
                <div key={item.id}>
                    <PostCard content={item.content} user={item.user} createdAt={item.createdAt} score={item.score}
                              currentUser={data.currentUser} id={item.id} replyAble={true}/>
                    {item.replies.length > 0 ?
                        (<div css={replies}>
                            <div css={firstChildReplies}/>
                            <div css={secondChildReplies}>
                                {item.replies.map(item => (
                                    <div key={item.id}>
                                        <PostCard content={item.content} user={item.user} createdAt={item.createdAt}
                                                  score={item.score} currentUser={data.currentUser} id={item.id} replyAble={false}/>

                                    </div>))}
                            </div>
                        </div>) : null}
                </div>)) : null}
            <LeaveComment button={"SEND"} currentUser={data.currentUser}/>
        </section>
    );
}

export default Home;
