import Container from "./components/Container";
import Card from "./components/Container";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Loginform from "./components/Loginform";
import { BrowserRouter, Routes, Route } from "react-router";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/expense" element={<Container />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </>)
}
export default App;
