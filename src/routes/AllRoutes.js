/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function AllRoutes() {

    const Home = React.lazy(() =>
        import('../pages/Home'));


    return (
        <React.Fragment>
            <BrowserRouter>
                <React.Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="/" element={<Wrapper component={<Home/>}/>}/>*/}
                </Routes>
                </React.Suspense>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default AllRoutes;
