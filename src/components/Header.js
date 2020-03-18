import React from "react";
import styled from "styled-components";
import "semantic-ui/dist/semantic.min.css";

const MainTitle = styled.h1`
  color: red;
  font-size: 5rem;
  margin: 0;
`;

const MainContent = styled.div`
  background-color: black;
`;



const Header = () => {
    return (
        <MainContent>
            <MainTitle>Nasa Photo of the Day</MainTitle>
        </MainContent>
    )
}
export default Header;