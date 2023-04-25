import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Home from "./Home";
import Category from "./Category";
import Favourite from "./Favourite";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Category />} path='/category/:type' />
                <Route element={<Contact />} path='/contact' />
                <Route element={<AboutUs />} path='/aboutUs' />
                <Route element={<Favourite />} path='/favourite' />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
