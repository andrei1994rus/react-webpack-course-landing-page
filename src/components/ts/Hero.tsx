import '../css/Hero.css';
import { scrollTo } from '../../utils/Scroll';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__wrap">
        <div className="hero__wrap__badge">
          <span>🚀</span>
          <span>Старт интенсива — 10 сентября 2026</span>
        </div>
        <h1>
          Стань{' '}
          <span className="hero__wrap__header__text-gradient">
            разработчиком
          </span>
          <br />
          за{' '}
          <span className="hero__wrap__header__text-gradient-orange">
            3 дня
          </span>
        </h1>
        <p>Интенсивные курсы с реальными проектами, живыми менторами</p>
        <div className="hero__wrap__div_buttons">
          <button onClick={() => scrollTo('#register')}>
            Записаться бесплатно
          </button>
          <button onClick={() => scrollTo('#program')}>
            Смотреть программу
          </button>
        </div>
        <div className="hero__wrap__trust_bar">
          <span>&#10003; Без опыта</span>
          <span>&#8226;</span>
          <span>&#10003; Живые менторы</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
