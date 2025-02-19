import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Pricing from "./routes/Pricing";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<Detail/>}></Route>
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
    </Router>
  );
}

export default App;
