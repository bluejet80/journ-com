import "./app.styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BodyArea, Header } from "./components";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <BodyArea />
      </div>
    </Router>
  );
};

export default App;
