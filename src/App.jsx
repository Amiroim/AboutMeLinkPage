import "./styles/App.css";
import Landing from "./page/Landing";
import SendMessage from "./page/SendMessage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <main className="AppMain">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/HiddenMessage" element={<SendMessage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
