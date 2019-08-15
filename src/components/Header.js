import React from "react";
import styled from "styled-components";
import "semantic-ui/dist/semantic.min.css";

const MainTitle = styled.h1`
  color: red;
  font-size: 5rem;
  margin: 0;
`;

const MainTitle2 = styled.h2`
  color: dodgerblue;
  font-size: 2.5rem;
`;

const MainContent = styled.div`
  background-color: black;
`;



const Header = () => {
    return (
        <MainContent>
            <MainTitle>Hello World!</MainTitle>
            <MainTitle2>Photo of the Day by NASA</MainTitle2>
        </MainContent>
    )
}
export default Header;