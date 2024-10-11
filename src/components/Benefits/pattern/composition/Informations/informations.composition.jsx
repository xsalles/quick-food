import {
  CardsInformations,
  ContainerInformations,
  Highlights,
  NumberComponent,
} from "./styles";

export default function Informations( {width} ) {
  return (
    <ContainerInformations>
      <CardsInformations>
        <NumberComponent>40+</NumberComponent>
        <Highlights width="132px">Foods Available</Highlights>
      </CardsInformations>
      <CardsInformations>
        <NumberComponent>600+</NumberComponent>
        <Highlights width="117px">Happy Clients</Highlights>
      </CardsInformations>
      <CardsInformations>
        <NumberComponent>5k+</NumberComponent>
        <Highlights width="114px">Online Orders</Highlights>
      </CardsInformations>
    </ContainerInformations>
  );
}
