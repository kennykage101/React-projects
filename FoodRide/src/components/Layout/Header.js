import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Bon Repas</h1>
        <HeaderCardButton onClick={ props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Bon repas meaning 'tasty meals' " />
      </div>
    </>
  );
};

export default Header;
