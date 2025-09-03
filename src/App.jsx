import Container from "./components/Container";
import Card from "./components/Container";
import {ToastContainer}  from "react-toastify"
import Loginform from "./components/loginform";
const App = () => {
  return (
    <>
    <Loginform/>
      <Container />
      <ToastContainer/>
      
    </>)
}
export default App;
