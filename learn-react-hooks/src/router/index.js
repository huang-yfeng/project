import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom"

let Mine = lazy(() => import('../pages/Mine'))
let Home = lazy(() => import('../pages/Home'))
let NotFound=lazy(()=>import('../pages/NotFound'))

function RouterIndex() {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>...加载中</div>}>
                    <Routes>
                        <Route path="/" element={<Mine/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/404" element={<NotFound/>}/>
                       <Route path="*" element={<Navigate to={'/404'}/>}/>
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default RouterIndex