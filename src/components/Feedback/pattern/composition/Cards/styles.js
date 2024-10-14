import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  width: 1240px;
  height: 400px;
  gap: 21px;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 40px;
  height: 400px;
  width: 400px;
`

export const ImageClient = styled.img`
  width: 100px;
  height: 100px;
  opacity: 100%;
  align-items: center;
`

export const InformationsClient = styled.div`
  display: flex;
  flex-direction: column;
  width: 319px;
  height: 154px;
  gap: 16px;
  text-align: center;
`

export const NameClient = styled.p`
  width: ${props => props.widthName};
  height: ${props => props.heightName};
  font-size: 28px;
  font-weight: 600;
  opacity: 100%;
`

export const FeedbackClient = styled.p`
  width: ${props => props.widthDescription};
  height: ${props => props.heightDescription};
  font-size: 18px;
  font-weight: 500;
  opacity: 60%;
`