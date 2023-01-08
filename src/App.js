import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import style from "./App.module.css";

function App() {
    return (
        <div className={style.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signin />} />
                    <Route path="/sign_up" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
