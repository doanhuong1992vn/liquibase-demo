import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE} from "./constant/page.js";
import HomePage from "./page/HomePage.jsx";
import LoginPage from "./page/LoginPage.jsx";
import RegisterPage from "./page/RegisterPage.jsx";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path={HOME_PAGE} element={<HomePage/>}/>
                    <Route path={LOGIN_PAGE} element={<LoginPage/>}/>
                    <Route path={REGISTER_PAGE} element={<RegisterPage/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default App
