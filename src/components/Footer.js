import React from "react";
import styled from "styled-components";

const FooterArea = styled.div`
  background-color: black;
`;

const FooterSubArea = styled.p`
font-size: 1.25rem;
color: dodgerblue;
padding-top: 15px;
`;

const FooterButton = styled.button`
font-size: 1rem;
background-color: dodgerblue;
padding: 15px;
border-radius: 8px;
`;

const FooterButtonStyle = styled.a`
color: white;
`;

const Footer = () => {
    return (
        <FooterArea>
            <FooterSubArea>Text and Photo's from NASA's APOD Api</FooterSubArea>
            <FooterButton>< FooterButtonStyle href="https://api.nasa.gov/api.html#apod">Take a look!!!</FooterButtonStyle></FooterButton>
        </FooterArea>
    );
}
export default Footer;