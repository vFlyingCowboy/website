import React from "react";
import Navbar from "components/Navbar/navbar";
import Services from "components/Services/services";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import AboutIntro from "components/About-intro";
import MyLife from "components/About-intro/life";
import Team from "components/Team/team";
import DarkTheme from "layouts/Dark";

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} from="about" />
      <PagesHeader />
      <AboutIntro />
      <Services style="4item" />
        <MyLife />
      <Team />
      <Footer />
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>About | Eric Steiner</title>
    </>
  )
}

export default About;
