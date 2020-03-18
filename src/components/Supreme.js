import React from "react";
import CardProducer from "./CardProducer";
import styled from "styled-components";

const SupremeArea = styled.div`
  background-color: black;
  font-size: 1.75rem;
  color: white;
`;

const Supreme = () => {
    return (
        <SupremeArea>
            <CardProducer />
        </SupremeArea>
    );
}

export default Supreme;