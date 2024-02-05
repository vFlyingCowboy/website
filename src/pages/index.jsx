import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import FreelancreIntro from "components/Freelancre-intro/freelancre-intro";
import DarkTheme from "layouts/Dark";

const Homepage = () => {
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
        <Navbar nr={navbarRef} lr={logoRef} />
        <FreelancreIntro />
        <Footer />
      </DarkTheme>
  );
};

export const Head = () => {
  return (
      <>
        <title>Home | Eric Steiner</title>
      </>
  )
}

export default Homepage;