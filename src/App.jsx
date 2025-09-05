import Container from "./components/Container";
import Card from "./components/Container";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Loginform from "./components/Loginform";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./components/Signup";
import Changepass from "./components/Changepass";
import Newpass from "./components/Newpass";
const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/expense" element={<Container />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/passchange" element={<Changepass />} />
          <Route path="/newpass" element={<Newpass/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </>)
}
export default App;
