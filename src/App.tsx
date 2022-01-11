import "./App.css";
import styled from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar";

import RoutesIndex from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Body>
        <Sidebar />
        <RoutesIndex />
      </Body>
    </BrowserRouter>
  );
}

export const Body = styled.div`
  display: flex;
`;

export default App;
