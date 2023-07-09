import HeaderCSS from "./Header.module.css";
import logoImage from "./assets/Marcos.png";

const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <h1 className={HeaderCSS.h1}>Cash Back Comparison Tool</h1>
      <div className={HeaderCSS.contentContainer}>
        <h3 className={HeaderCSS.h3}>By Marcos Maciel</h3>
        <img src={logoImage} className={HeaderCSS.logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
