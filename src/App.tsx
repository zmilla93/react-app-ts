import { HashRouter, Link, Outlet, Route, Routes } from "react-router";
import "./App.css";
import Icon from "./assets/smiley.png";
import { getImage } from "./ImageLoader";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";


const smile = "smiely";

const App = () => {
    return (
        <>
            {/* <Navbar /> */}
            <HashRouter>
                <Routes>
                    <Route path="/" element={<PageWrapper />} >
                        <Route index element={<Homepage />} />
                        <Route path="page1" element={<Page1 />} />
                        <Route path="page2" element={<Page2 />} />
                        <Route path="*" element={<div>Page not found.</div>} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    )
}

function PageWrapper() {
    return <div>
        <Navbar />
        <Outlet />
    </div>

}
function Navbar() {
    return (<div>
        <Link to="/" className="">Home</Link>
        <Link to="page1">Page 1</Link>
        <Link to="page2">Page 2</Link>
        <Link to="page3">Page 3</Link>
    </div>);
}

function Homepage() {
    const img = import("./assets/smiley.png");
    return (
        <div className=" bg-green-400">
            <h1>
                Hello World!
            </h1>
            <div>
                This is a template project for the following tech stack:
                <ul>
                    <li>- Webpack 5</li>
                    <li>- React</li>
                    <li>- React Router</li>
                    <li>- Typescript</li>
                    <li>- Tailwind CSS</li>
                    <li>- Deplayed to GitHub Pages</li>
                    <li>- Deployed with GitHub Actions</li>
                </ul>
                <br></br>
            </div>
            <h1>Dynamic Image Test</h1>
            <img src={Icon} alt="Smiley face" />
            <img src={getImage("smiley.png")} alt="Smiley face" />
            <img src={getImage("icons/alert.png")} alt="Smiley face" />
        </div>
    )
}

export default App
