import { useState } from "react";
import reactLogo from "./assets/img/react.svg";
import viteLogo from "./assets/img/vite.svg";
import bootstrapLogo from "./assets/img/bootstrap.png";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
                <a href="https://getbootstrap.com/" target="_blank">
                    <img
                        src={bootstrapLogo}
                        className="logo bootstrap"
                        alt="Bootstrap logo"
                    />
                </a>
            </div>
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
