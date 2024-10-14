import Content from "./pattern/composition/Content/content.composition.jsx";
import ImageAboutUs from "./pattern/composition/Image/image.composition.jsx";
import { ContainerAboutUs } from "./styles";

import Barbecue from "../../assets/images/imageAboutUs/pictureAboutUs.png"

export default function AboutUs() {
  return (
    <ContainerAboutUs>
      <Content
        title="About Us"
        description="The best way to make it works is to have a smart list 
            of all the restaurants and cuisines organized by location, type of food 
            (fast food, or more gourmet dishes), food preferences 
            (vegetarian, meat lovers, any special diets like gluten-free diets), 
            different nation’s cuisine, etc."
        textButton="Learn More"
      />
      <ImageAboutUs src={Barbecue}/>
    </ContainerAboutUs>
  );
}
