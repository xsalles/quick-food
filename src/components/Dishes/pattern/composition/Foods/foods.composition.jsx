import {
  BuyNow,
  ContainerFoods,
  DescriptionFood,
  Food,
  ImageFood,
  NameFood,
} from "./style";

import GarlicSalad from "../../../../../assets/images/imagesDishes/garlicSalad.png";
import CapreseSalad from "../../../../../assets/images/imagesDishes/capreseSalad.png";

export default function Foods({ width }) {
  return (
    <ContainerFoods>
      <Food>
        <ImageFood width="250px" src={GarlicSalad} />
        <NameFood width="162px">Garlic Salad</NameFood>
        <DescriptionFood>
          Caprese is a classic Italian salad made with sliced tomatoes.
        </DescriptionFood>
        <BuyNow>Buy Now</BuyNow>
      </Food>
      <Food>
        <ImageFood width="195px" src={CapreseSalad} />
        <NameFood width="193px">Caprese Salad</NameFood>
        <DescriptionFood>
          Caprese is a classic Italian salad made with sliced tomatoes.
        </DescriptionFood>
        <BuyNow>Buy Now</BuyNow>
      </Food>
      <Food>
        <ImageFood width="250px" src={GarlicSalad} />
        <NameFood width="162px" >Garlic Salad</NameFood>
        <DescriptionFood>
          Caprese is a classic Italian salad made with sliced tomatoes.
        </DescriptionFood>
        <BuyNow>Buy Now</BuyNow>
      </Food>
    </ContainerFoods>
  );
}
