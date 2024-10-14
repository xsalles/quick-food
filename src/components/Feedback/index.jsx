import Cards from "./pattern/composition/Cards/cards.composition.jsx";
import TitleFeedback from "./pattern/composition/TitleFeedback/titleFeedback.composition.jsx";
import { ContainerFeedback } from "./styles";

import Jane from "../../assets/images/imagesFeedback/janeCooper.png";
import Esther from "../../assets/images/imagesFeedback/estherHoward.png";
import Guy from "../../assets/images/imagesFeedback/guyHawkins.png";
import { ContainerCards } from "./pattern/composition/Cards/styles.js";

export default function Feedback() {
  return (
    <ContainerFeedback>
      <TitleFeedback />
      <ContainerCards>
        <Cards
          src={Jane}
          name="Jane Cooper"
          feedback="I have to say, I enjoyed every single bite of the meal in (RN). 
          I had a 3 course meal, with a couple of beers. Considering the quality, 
          the price is reasonable."
        />
        <Cards
          src={Esther}
          name="Esther Howard"
          feedback="It’s a great experience. 
        The ambiance is very welcoming and charming. Amazing food and service. 
        Staff are extremely knowledgeable and make great recommendations"
        />
        <Cards
          src={Guy}
          name="Guy Hawkins"
          feedback="Do yourself a favor and order from 
          this lovely restaurant. 
          The service is unmatched. 
          The staff truly cares about your experience."
        />
      </ContainerCards>
    </ContainerFeedback>
  );
}
