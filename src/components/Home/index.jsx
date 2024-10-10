import Description from "./pattern/composition/Description/description.composition";
import Image from "./pattern/composition/Image/image.composition";
import { ContainerHome } from "./styles";

export default function Home(){
    return(
        <ContainerHome>
          <Description/>
          <Image/>
        </ContainerHome>
    )
}