import styled from "styled-components";

export const ContainerInformations = styled.div`
  display: flex;
  width: 1240px;
  height: 87px;
  margin-top: 60px;
  gap: 20px;

`;

export const CardsInformations = styled.div`
  display: flex;
  width: 1200px;
  height: 87px;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const NumberComponent = styled.p`
  width: 85px;
  font-size: 48px;
  font-weight: 700;
`

export const Highlights = styled.p`
  font-size: 18px;
  font-weight: 500;
  width: ${props => props.width};
  height: 21px;
  opacity: 60%;
`;
