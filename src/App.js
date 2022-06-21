/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {Global, css} from '@emotion/react'
import * as Variable from './constants/Variables';
import Routes from "./routes/AllRoutes";

function App() {

    const global = () => css`
      @font-face {
        font-family: "Rubik-Medium";
        src: local("Rubik-Medium"), url("Rubik-VariableFont.ttf") format("truetype");
      }
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Rubik-Medium", sans-serif;
        text-decoration: none;
        direction: ltr;
        scroll-behavior: smooth;
        color: ${Variable.FontColor};

        :after :before {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        body {
          font-size: 16px;
          text-align: justify;
        }
        
        h1 {
          font-size: 3em;
        }

        h2 {
          font-size: 2em;

        }

        h3 {
          font-size: 1.5em;
        }

        h4 {
          font-size: 1.3em;
        }

        h5 {
          font-size: 1em;
        }

        h6 {
          font-size: .7em;
        }

        p {
          font-size: 1em;
        }
        span{
          font-size: 1em;

        }

      }
    `
    return (

        <React.Fragment>
            <Global styles={global}/>
            <Routes/>
        </React.Fragment>
    );
}

export default App;
