import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddVideo from "./pages/AddVideo";
import Footer from "./components/Footer";
import VerVideo from "./pages/VerVideos";
import AddCategory from "./pages/AddCategory";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-video" element={<AddVideo/>}/>
        <Route path="/ver/:id" element={<VerVideo/>}/>
        <Route path="/add-category" element={<AddCategory/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
