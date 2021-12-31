import "./App.css";
import Home from "../src/Pages/Home";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Body className="App">
      <Home />
      <Sidebar />
    </Body>
  );
}

export const Body = styled.div`
  display: flex;
`;

export default App;
