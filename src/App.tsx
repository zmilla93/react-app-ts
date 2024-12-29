import { HashRouter, Link, Route, Routes } from "react-router"

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="page1" element={<div>P1</div>} />
                <Route path="page2" element={<div>P2</div>} />
            </Routes>
        </HashRouter>

    )
}

function Home() {
    return (
        <div>
            <h1>
                Hello world!
            </h1>
            <div>
                This website was made by:
                <ul>
                    <li>Generate a new project using Webpack</li>
                </ul>
                <Link to="page1">Page 1</Link>
                <Link to="page2">Page 2</Link>
                <Link to="page3">Page 3</Link>
            </div>
        </div>
    )
}

export default App
