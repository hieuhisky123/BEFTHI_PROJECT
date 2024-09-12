import styled from "styled-components";
import Banner from "./Banner";
import About from "./About";
import System from "./System";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About4";
import About5 from "./About5";
import About6 from "./About6";
import About7 from "./About7";

const Langding = () => {
  return (
    <Wapper>
      <Container>
        <Banner />
        <About />
        <System />
        <About2 />
        <About3 />
        <About4 />
        <About5 />
        <About6 />
        <About7 />
      </Container>
    </Wapper>
  );
};
export default Langding;
const Wapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0px auto;
  padding-top: 120px;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
`;
