import AboutUs from "../../components/AboutUs/index.jsx";
import Benefits from "../../components/Benefits/index.jsx";
import Dishes from "../../components/Dishes/index.jsx";
import Feedback from "../../components/Feedback/index.jsx";
import Header from "../../components/Header/index.jsx";
import Home from "../../components/Home/index.jsx";
import Newsletter from "../../components/Newsletter/index.jsx";
import { Container } from "./styles.js";

export default function QuickFood() {
  return (
    <Container>
      <Header />
      <Home />
      <Benefits />
      <Dishes />
      <Feedback />
      <AboutUs />
      <Newsletter
        title="Subscribe to our Newsteller"
        description="Join Us and Get Update on our Available Product."
        text="Enter your email address"
        textButton="Subscribe "
      />
    </Container>
  );
}
