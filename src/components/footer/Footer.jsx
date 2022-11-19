import React from "react";
import item from "./Footer.module.css";
import telegrammImg from "../../img/social/telegram.svg";
import whatsappImg from "../../img/social/whatsapp.svg";
import viberImg from "../../img/social/viber.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={item.bottom}>
        <div className={item.bottom__left}>
          <div className={item.bottom__left_company}>О компании
            <nav className={item.bottom__left_category}>
              <NavLink className={item.bottom__left_nav}>Партнёрская программа</NavLink>
              <NavLink className={item.bottom__left_nav}>Вакансии</NavLink>
            </nav>
          </div>
          <div className={item.bottom__left_name}>Меню
            <div className={item.bottom__left_special}>
              <nav className={item.bottom__left_menu}>
                <NavLink className={item.bottom__left_nav}>Расчёт стоимости</NavLink>
                <NavLink className={item.bottom__left_nav}>Услуги</NavLink>
                <NavLink className={item.bottom__left_nav}>Виджеты</NavLink>
                <NavLink className={item.bottom__left_nav}>Интеграции</NavLink>
                <NavLink className={item.bottom__left_nav}>Наши клиенты</NavLink>
              </nav>
              <nav className={item.bottom__left_menu}>
                <NavLink className={item.bottom__left_nav}>Кейсы</NavLink>
                <NavLink className={item.bottom__left_nav}>Благодарственные письма</NavLink>
                <NavLink className={item.bottom__left_nav}>Сертификаты</NavLink>
                <NavLink className={item.bottom__left_nav}>Блог на Youtube</NavLink>
                <NavLink className={item.bottom__left_nav}>Вопрос / Ответ</NavLink>
              </nav>
            </div>
          </div>
        </div>
        <div className={item.bottom__right}>Контакты
          <div className={item.bottom__right_special}>
            <div className={item.bottom__right_nav}>+7 555 555-55-55</div>
            <div className={item.bottom__right_nav}>
              <img src={telegrammImg} alt="logo" />
              <img src={whatsappImg} alt="logo" />
              <img src={viberImg} alt="logo" />
            </div>
            <div className={item.bottom__right_nav}>
              Москва, Путевой проезд 3с1, к 902
            </div>
          </div>
        </div>
      </div>
      <div className={item.copyright}>
        <div>©WELBEX 2022. Все права защищены.</div>
        <div className={item.copyright__special}>Политика конфиденциальности</div>
      </div>
    </footer>
  );
};

export default Footer;
