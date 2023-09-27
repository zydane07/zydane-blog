import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Training from "./pages/Training";
import Create from "./pages/Create";
import PostDetail from "./pages/home/PostDetail";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/training" element={<Training />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};
export default App;
