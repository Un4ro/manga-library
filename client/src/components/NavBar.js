import React, { useContext } from "react"
import { Context } from "../index"
import {NavLink as RouterLink} from 'react-router-dom'
import { Navbar, Nav, Container} from "react-bootstrap"
import { observer } from "mobx-react-lite"
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTER_ROUTE, STUFF_ROUTE } from "../utils/consts"


const NavBar = observer(() => {
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }


    return ( 
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">ViaManga</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <RouterLink className="nav-link" to={STUFF_ROUTE}>Каталог</RouterLink>
                            <RouterLink className="center nav-link" to={MAIN_ROUTE}>Главная страница</RouterLink>
                        </Nav>
                        {(!user.isAuth) ?
                        <Nav>
                            <RouterLink className="nav-link" to={LOGIN_ROUTE}>Войти</RouterLink>
                            <RouterLink className="nav-link" to={REGISTER_ROUTE}>Регистрация</RouterLink> 
                        </Nav>
                        :
                        <Nav>
                            <RouterLink className="nav-link" to={ADMIN_ROUTE}>Панель администратора</RouterLink>
                            <Nav.Link className="ml-2" onClick={() => logOut()} >Выйти</Nav.Link>
                        </Nav>    
                        }   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
})

export default NavBar