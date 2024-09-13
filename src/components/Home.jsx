import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
`;

function Home() {
  return (
    <HomeWrapper>
      <Title>
        Mithil Yaganti
      </Title>
      <Subtitle>
        Hi! I'm an (incongruously French) part-time CompSci student and a
        full-time project builder. I'm obsessed with making cool stuff and love
        getting things off the ground.
      </Subtitle>
    </HomeWrapper>
  );
}

export default Home;