import Cards from "./pattern/composition/Card/card.composition.jsx";
import Informations from "./pattern/composition/Informations/informations.composition.jsx";
import Question from "./pattern/composition/Question/question.composition.jsx";
import { ContainerBenefits } from "./styles";

export default function Benefits({ width, height, spacing, gap, text, src }) {
  return (
    <ContainerBenefits>
      <Question />
      <Cards />
      <Informations/>
    </ContainerBenefits>
  );
}
