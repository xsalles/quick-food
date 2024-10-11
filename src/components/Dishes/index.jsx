import { ContainerDishes } from "./styles";

import Foods from "./pattern/composition/Foods/foods.composition.jsx";
import SpecialDishes from "./pattern/composition/SpecialDishes/specialDishes.composition.jsx";

export default function Dishes ( {width} ) {
    return(
        <ContainerDishes>
            <SpecialDishes/>
            <Foods/>
        </ContainerDishes>
    )
}