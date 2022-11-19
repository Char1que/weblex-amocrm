import React from "react";
import item from "./Header.module.css";
import logoImg from "../../img/logo.svg";
import telegrammImg from "../../img/social/telegram.svg";
import whatsappImg from "../../img/social/whatsapp.svg";
import viberImg from "../../img/social/viber.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={item.wrapper__logo}>
        <img src={logoImg} alt="logo" />
        <div className={item.wrapper__logo_text}>
          крупный интегратор CRM в Росcии и ещё 8 странах
        </div>
      </div>
      <nav className={item.wrapper__nav}>
        <NavLink to="#" className={item.wrapper__name}>
          Услуги
        </NavLink>
        <NavLink to="#" className={item.wrapper__name}>
          Виджеты
        </NavLink>
        <NavLink to="#" className={item.wrapper__name}>
          Интеграции
        </NavLink>
        <NavLink to="#" className={item.wrapper__name}>
          Кейсы
        </NavLink>
        <NavLink to="#" className={item.wrapper__name}>
          <div className={item.wrapper__name_media}>Сертификаты</div>
        </NavLink>
      </nav>
      <div className={item.wrapper__social}>
        <div className={item.wrapper__social_number}>+7 555 555-55-55</div>
        <img src={telegrammImg} alt="logo" />
        <img src={whatsappImg} alt="logo" />
        <img src={viberImg} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
