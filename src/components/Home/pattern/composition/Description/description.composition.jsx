import { ContainerDescription, Title, Content, Buttons, Order, Explore } from "./styles";

export default function Description({ color }) {
  return (
    <ContainerDescription>
      <Title>
        We deliver{" "}
        <Title color="#00A000" as="span">
          {" "}
          Healthy & Delicious
        </Title>{" "}
        Food
      </Title>
      <Content>
        Order online or book a table. We are always ready to fulfill your
        demand. You would get fastest delivery you could ever imagine.
        Keep in touch with us to take your delicious foods.
      </Content>
      <Buttons>
        <Order>Order now</Order>
        <Explore>Explore Products</Explore>
      </Buttons>
    </ContainerDescription>
  );
}
