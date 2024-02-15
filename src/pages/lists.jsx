import React from "react";
import Navbar from "components/Navbar/navbar";
import Listslist from "components/Services/lists";
import Footer from "components/Footer/footer";
import ListsIntro from "components/About-intro/lists";
import DarkTheme from "layouts/Dark";
import ListsHeader from "components/Pages-header/lists";

const Lists = () => {
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
            <ListsHeader />
            <ListsIntro />
            <Listslist style="4item" />
            <Footer />
        </DarkTheme>
    );
};

export const Head = () => {
    return (
        <>
            <script src="https://kit.fontawesome.com/ffc3fb01a7.js" crossOrigin="anonymous"></script>
            <title>Lists | Eric Steiner</title>
        </>
    )
}

export default Lists;
