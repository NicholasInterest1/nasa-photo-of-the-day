import React from "react";
import styled from "styled-components";

const FooterArea = styled.div`
  background-color: black;
`;

const FooterSubArea = styled.p`
font-size: 2rem;
color: dodgerblue;
padding-top: 15px;
`;

// const FooterButton = styled.button`
// font-size: 1.5rem;
// color: white;
// background-color: dodgerblue;
// padding: 10px;
// border-radius: 8px;
// `;

const FooterSubAreaStyle = styled.a`
color: dodgerblue;
font-size: 1.75rem;
padding-bottom: 1rem;
`;

const Footer = () => {
    return (
        <FooterArea>
            <FooterSubArea>Text and Photo's from NASA's APOD Api</FooterSubArea>
            <FooterSubAreaStyle href="https://api.nasa.gov/api.html#apod">Click me and take a look!!!</FooterSubAreaStyle>
        </FooterArea>
    );
}
export default Footer;