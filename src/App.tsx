import { HashRouter, Link, Outlet, Route, Routes } from "react-router";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

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
        <Link to="/">Home</Link>
        <Link to="page1">Page 1</Link>
        <Link to="page2">Page 2</Link>
        <Link to="page3">Page 3</Link>
    </div>);
}

function Homepage() {
    return (
        <div>
            <h1>
                Hello World!
            </h1>
            <div>
                This project is a template for a project using React, React Router, Typescript, Webpack, and automated deployment to GitHub Pages.
                <br></br>

            </div>
        </div>
    )
}

export default App
