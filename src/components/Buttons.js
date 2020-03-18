import React from 'react'
import { Button } from 'semantic-ui-react'
import styled from "styled-components";

const BG = styled.div`
  background-color: black;
`;

const PlanetButtons = () => (
  <BG>
    
    <Button href="https://en.wikipedia.org/wiki/Mercury_(planet)" inverted color='red'>
      Mercury
    </Button>
    <Button href="https://en.wikipedia.org/wiki/Venus" inverted color='orange'>
      Venus
    </Button>
    <Button href="https://en.wikipedia.org/wiki/Earth" inverted color='yellow'>
      Earth
    </Button>
    <Button href="https://en.wikipedia.org/wiki/Mars" inverted color='olive'>
      Mars
    </Button>
    <Button href="https://en.wikipedia.org/wiki/Jupiter" inverted color='green'>
      Jupiter
    </Button>
    <Button href="https://en.wikipedia.org/wiki/Saturn" inverted color='teal'>
      Saturn
    </Button>
    <Button href="https://en.wikipedia.org/wiki/Uranus" inverted color='blue'>
      Uranus
    </Button>
    <Button href="https://en.wikipedia.org/wiki/Neptune" inverted color='violet'>
      Neptune
    </Button>
    <Button href="https://en.wikipedia.org/wiki/Pluto" inverted color='pink'>
      Pluto
    </Button>
  </BG>
)

export default PlanetButtons