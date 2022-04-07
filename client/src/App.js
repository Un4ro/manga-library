import { check } from "./http/userAPI";
import { observer } from "mobx-react-lite";
import React, { useState, useContext, useEffect } from "react"
import { Spinner } from "react-bootstrap";
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./components/main.routes";
import NavBar from "./components/NavBar";
import {Context} from "./index"
import Footer from "./components/Footer";



const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
      
  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000)
  }, [])

  if (loading) {
    return (<div><Spinner className="ml-auto"animation="border" variant="info" size="lg" /></div>)
  }

  return (
    <BrowserRouter>
        <NavBar />
        <section  className="main-content">
          <AppRouter />
        </section>
        <Footer />
    </BrowserRouter>
  );
})

export default App;
