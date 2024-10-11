import styled from "styled-components";

export const Propose = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 657px;
  height: 88px;
  gap: 7px;
`;

export const Title = styled.p`
  font-size: ${(props) => props.size || "48px"};
  font-weight: ${(props) => props.weight || "800"};
  width: ${(props) => props.width || "437px"};
  height: ${(props) => props.height || "59px"};
`;

export const Description = styled.p`
  width: ${(props) => props.width || "657px"};
  height: ${(props) => props.height || "21px"};
  font-size: 18px;
  font-weight: ${(props) => props.weight || "500"};
  letter-spacing: ${(props) => props.spacing || "4.5%"};
  text-align: center;
  color: #999999;
`;