import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import SlideShow from "./components/SlideShow";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <NavBar />
            <SlideShow />
            <h1>Vite + React + Bootstrap</h1>
            <div className="card">
                <p className="text-primary">count is {count}</p>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <Button
                variant="primary"
                onClick={() => setCount((count) => count + 1)}
            >
                Button
            </Button>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
