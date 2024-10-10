import styled from "styled-components";

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 563px;
  text-align: left;
  gap: 32px;
  padding: 51.5px 0 51.5px 0;
`;

export const Title = styled.p`
  font-weight: bold;
  width: 563px;
  height: 160px;
  color: ${props => props.color || '#000001'};
  font-size: 60px;
`;

export const Content = styled.p`
  width: 503px;
  height: 116px;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 4.5%;
  color: #999999;
`

export const Buttons = styled.div `
  display: flex;
  text-align: center;
  width: 356px;
  height: 51px;
  gap: 24px;
`

export const Order = styled.button `
  width: 144px;
  height: 51px;
  border: 1px solid #00A000;
  border-radius: 10px;
  background-color: #00A000;
  color: white;
`

export const Explore = styled.button `
  width: 188px;
  height: 51px;
  border: 1px solid #00A000;
  border-radius: 10px;
  background: transparent;
  color: #00A000;
`
