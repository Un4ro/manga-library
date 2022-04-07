import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { authRoutes, publicRoutes } from "../path.routes"
import { MAIN_ROUTE } from "../utils/consts"
import {Context} from "../index"
import { observer } from "mobx-react-lite"

const AppRouter = observer(() => {
        const {user} = useContext(Context)
        
        return (
                <Routes>
                    {user.isAuth ? authRoutes.map(({path, Component}) => {
                        return (<Route key={path} path={path} element={Component} exact />)
                    }) : null}
                    {publicRoutes.map(({path, Component}) => {
                        return (<Route key={path} path={path} element={Component} exact />)
                    })}
                    <Route
                        path="*"
                        element={<Navigate to={MAIN_ROUTE} replace />}
                    />
                </Routes>
        ) 
})

export default AppRouter