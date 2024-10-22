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
import { Link } from "react-router-dom";

const optionsGray = [ "Products", "Contact", "About", "Feedback"];

export default function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <NameOfCompany>QUICKFOOD</NameOfCompany>
      </Link>
      <Menu>
        <OptionsGray>
          {optionsGray.map((option) => (
            <Link to={`/${option.toLowerCase()}`}>
              <p>{option}</p>
            </Link>
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
