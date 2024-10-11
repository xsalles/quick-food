import { Advantages, Card, Image, ImageWithTitle } from "./styles";

import { Description, Title } from "../Question/styles";

import BestOffer from "../../../../../assets/images/imagesBenefits/BestOffer.png";
import Delivery from "../../../../../assets/images/imagesBenefits/Delivery.png";
import EasyPayment from "../../../../../assets/images/imagesBenefits/EasyPayment.png";

export default function Cards({ size, weight, width, height, spacing, text }) {
  return (
    <Advantages>
      <Card>
        <ImageWithTitle>
          <Image src={BestOffer} />
          <Title
            size="28px"
            weight="600"
            width="136px"
            height="33px"
            spacing="0"
          >
            Best Offer
          </Title>
        </ImageWithTitle>
        <Description weight="500" width="275.3px" height="42px" spacing="0">
          We offer you healthy & delicious food with good hygiene.
        </Description>
      </Card>
      <Card>
        <ImageWithTitle>
          <Image src={EasyPayment} />
          <Title
            size="28px"
            weight="600"
            width="190px"
            height="33px"
            spacing="0"
          >
            Easy Payment
          </Title>
        </ImageWithTitle>
        <Description weight="500" width="242px" height="40px" spacing="0">
          Payment is easy and quick to order your foods.
        </Description>
      </Card>
      <Card>
        <ImageWithTitle>
          <Image src={Delivery} />
          <Title
            size="28px"
            weight="600"
            width="214px"
            height="33px"
            spacing="0"
          >
            Fastest delivery
          </Title>
        </ImageWithTitle>
        <Description weight="500" width="242px" height="63px" spacing="0">
          Our delivery is super active and run delivery inter state
        </Description>
      </Card>
    </Advantages>
  );
}
