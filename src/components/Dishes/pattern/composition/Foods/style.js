import styled from "styled-components"

export const ContainerFoods = styled.div`
  display: flex;
  width: 1240px;
  height: 483.65px;
  gap: 20px;
  justify-content: center;
`

export const Food = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  height: 483.65px;
  width: 400px;
`

export const ImageFood = styled.img`
  width: ${props => props.width};
  height: 242px;
  opacity: 100%;
`

export const NameFood = styled.h3`
  height: 34px;
  width: ${props => props.width};
  font-size: 28px ;
  font-weight: 700;
`

export const DescriptionFood = styled.p`
  width: 279px;
  height: 58px;
  font-size: 18px;
  font-weight: 500;
  opacity: 60%;
`

export const BuyNow = styled.button`
  width: 352px;
  padding: 16px 32px;
  border: 1px solid #00A000;
  background-color: #00A000;
  border-radius: 8px;
  height: 53px;
  font-size: 18px;
  color: white;
  cursor: pointer;
`