import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
