import React from "react";
import { Route, Routes } from "react-router-dom";
import path from "./utils/path";
import styled from "styled-components";
import Menudestop from "./components/menuDestop/menudestop";
import Footer from "./components/footer/footer";
import Langding from "./langding";
import About from "./langding/About";

function App() {
  return (
    <Wapper>
      <Menudestop />
      <div className="min-h-screen font-main">
        <Routes>
          <Route path={"/"} element={<Langding />} />
          <Route path={"/paner"} element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Wapper>
  );
}

export default App;
const Wapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0px auto;
  background: #111015;
`;
const Container = styled.div``;
