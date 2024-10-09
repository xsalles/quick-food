import {
  HeaderContainer,
  NameOfCompany,
  OptionGreen,
  Menu,
  OptionsGray,
  Options,
  Icons,
  ShoppingCart,
  Search,
  Login
} from "./styles.js";

import Look from "../../assets/images/imagesHeader/search.png"
import Cart from "../../assets/images/imagesHeader/shoppingCart.png"

const optionsGray = ["Products", "Contact us", "About"];

export default function Header() {
  return (
    <HeaderContainer>
      <NameOfCompany>QUICKFOOD</NameOfCompany>
      <Menu>
        <OptionGreen>Home</OptionGreen>
        <OptionsGray>
          {optionsGray.map((option, index) => (
            <div key={index}>{option}</div>
          ))}
        </OptionsGray>
      </Menu>
      <Options>
        <Icons>
            <Search src={Look}/>
            <ShoppingCart src={Cart}/>
        </Icons>
        <Login>Login</Login>
      </Options>
    </HeaderContainer>
  );
}
