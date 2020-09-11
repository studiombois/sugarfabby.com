import Heading from '@components/elements/Text/Heading';
import Text from '@components/elements/Text/Text';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  background-image: linear-gradient(
      213deg,
      var(--color-background) 0%,
      var(--color-background-dark) 100%
    ),
    linear-gradient(
      32deg,
      rgba(255, 255, 255, 0.25) 33%,
      rgba(153, 153, 153, 0.25) 100%
    );
  > * {
    text-align: center;
  }
`;

const FourOFour = () => {
  return (
    <Container>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100"
        height="100"
        viewBox="0 0 455.111 455.111"
        xmlSpace="preserve"
      >
        <circle fill="#E24C4B" cx="227.556" cy="227.556" r="227.556" />
        <path
          fill="#D1403F"
          d="M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556 c-72.533,0-136.533-32.711-177.778-85.333 c38.4,31.289,88.178,49.778,142.222,49.778 c125.156,0,227.556-102.4,227.556-227.556 c0-54.044-18.489-103.822-49.778-142.222C422.4,91.022,455.111,155.022,455.111,227.556z"
        />
        <path
          fill="#FFFFFF"
          d="M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533c-8.533,8.533-22.756,8.533-31.289,0 c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533 c8.533-8.533,22.756-8.533,31.289,0 c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533C339.911,308.622,339.911,322.844,331.378,331.378z"
        />
      </svg>
      <Heading size="h3" style={{ marginTop: '15px' }}>
        Page Not Found
      </Heading>
      <Text>Looks like you are on the wrong page...</Text>
    </Container>
  );
};

export default FourOFour;
