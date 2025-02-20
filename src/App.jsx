import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Pricing from "./routes/Pricing";
import SurveyForm from './components/Survey/SurveyForm';
import { useEffect } from "react";
const tg = window.Telegram ? window.Telegram.WebApp : null;

function App() {
  useEffect(() => {
    tg.ready();
    tg.setHeaderColor("#4A592C")
    }, []);
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<Detail/>}></Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/survey" element={<SurveyForm />} />
        </Routes>
    </Router>
  );
}

export default App;
