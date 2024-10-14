import styled from "styled-components";

export const ContainerNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 326px;
  width: 1440px;
  height: 424px;
`;

export const Section = styled.div`
  display: flex;
  width: 710px;
  height: 224px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 60px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 87px;
  align-items: center;
  gap: 8px;
`;

export const SubscribeTitle = styled.p`
  font-size: 48px;
  font-weight: 700;
  width: 640px;
  height: 58px;
`;

export const SubscribeDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  width: 412px;
  height: 21px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 710px;
  height: 77px;
  border: 1px solid black;
  border-radius: 8px 8px 8px 8px;
  align-items: center;
  gap: 31px;
  position: relative;
  padding-top: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  padding-left: 24px;
`;

export const Input = styled.input`
  width: 710px;
  height: 70px;
  border: 1px solid black;
  border: 0px;
  border-radius: 8px 8px 8px 8px;
`;

export const ButtonInput = styled.button`
  position: relative;
  border: 1px solid #00a000;
  background-color: #00a000;
  width: 174px;
  height: 61px;
  padding: 16px 32px;
  color: white;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 500;
`;
