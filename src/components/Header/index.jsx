import {
  HeaderContainer,
  NameOfCompany,
  Menu,
  OptionsGray,
  Options,
  Icons,
  ShoppingCart,
  Search,
  Login,
} from "./styles.js";

import Look from "../../assets/images/imagesHeader/search.png";
import Cart from "../../assets/images/imagesHeader/shoppingCart.png";

const optionsGray = ["Home", "Products", "Contact", "About", "Feedback"];

export default function Header() {
  return (
    <HeaderContainer>
      <NameOfCompany>QUICKFOOD</NameOfCompany>
      <Menu>
        <OptionsGray>
          {optionsGray.map((option) => (
            <p>{option}</p>
          ))}
        </OptionsGray>
      </Menu>
      <Options>
        <Icons>
          <Search src={Look} />
          <ShoppingCart src={Cart} />
        </Icons>
        <Login>Login</Login>
      </Options>
    </HeaderContainer>
  );
}
