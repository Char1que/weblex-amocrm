import React from "react";
import item from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <div className={item.title__left}>
        <div>
          Зарабатывайте больше<span className={item.title__left_special}> с WELBEX</span>
        </div>
        <div className={item.title__left_subtitle}>
          Развиваем и контролируем продажи за вас
        </div>
      </div>
      <div className={item.title__right}>
        <div>
          Вместе с<span className={item.title__right_special}> БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ </span>мы дарим:
        </div>
        <div className={item.title__promo}>
          <div className={item.title__promo_content}>
            <p className={item.title__promo_content_header}><div className={item.title__promo_content_media}>-</div> Виджеты</p>
            <p className={item.title__promo_media}>30 готовых решений</p>
          </div>
          <div className={item.title__promo_content}>
            <p className={item.title__promo_content_header}><div className={item.title__promo_content_media}>-</div> Dashboard</p>
            <p className={item.title__promo_media}>с показателями вашего бизнеса</p>
          </div>
          <div className={item.title__promo_content}>
            <p className={item.title__promo_content_header}><div className={item.title__promo_content_media}>-</div> Skype Аудит</p>
            <p className={item.title__promo_media}>отдела продаж и CRM системы</p>
          </div>
          <div className={item.title__promo_content}>
            <p className={item.title__promo_content_header}><div className={item.title__promo_content_media}>-</div> 35 дней</p>
            <p className={item.title__promo_media}>использования CRM</p>
          </div>
        </div>
        <button className={item.title__right_consultation}>
          Получить консультацию
        </button>
      </div>
    </main>
  );
};

export default Main;
