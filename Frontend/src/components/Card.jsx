import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: 'none' }}>
      <Container>
        <Image src="https://gumlet.assettype.com/afkgaming%2F2022-04%2F69cc655a-f970-4d03-9a80-baab562c98fb%2FUntitled_design___2022_04_01T105634_520__1_.jpg?format=auto" />
        <Details>
          <ChannelImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png" />
          <Texts>
            <Title>League of Legends</Title>
            <ChannelName>LOL</ChannelName>
            <Info>7,351,449 views • Apr 16, 2016</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
