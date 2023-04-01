import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Contact />} path='/contact' />
                <Route element={<AboutUs />} path='/aboutUs' />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
