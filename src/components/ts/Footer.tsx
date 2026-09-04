import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrap">
        <div className="footer__wrap__top_row">
          <div>
            <div className="footer__wrap__top_row__brand">
              <div>CI</div>
              <span>
                Code<span>Intensive</span>
              </span>
            </div>
            <p className="footer__wrap__top_row__info">
              Онлайн-школа программирования нового поколения. Учим профессиям с
              гарантией результата с 2020 года.
            </p>
          </div>
          <div className="footer__wrap__top_row__contact">
            <p>Контакты</p>
            <div className="footer__wrap__top_row__contact__data">
              {[
                { icon: '✉️', text: 'hello@codeintensive.ru' },
                { icon: '📱', text: '+7 (800) 123-45-67' },
                { icon: '📌', text: 'Москва, ул. Новаторов, 36' },
                { icon: '⏰', text: 'Пн–Пт: 9:00–21:00' },
              ].map((c) => (
                <div
                  className="footer__wrap__top_row__contact__data__item"
                  key={c.text}
                >
                  <span className="footer__wrap__top_row__contact__data__item__icon">
                    {c.icon}
                  </span>
                  <span className="footer__wrap__top_row__contact__data__item__text">
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__wrap__bottom_row">
          <p className="footer__wrap__bottom_row__copyright">
            © 2026 CodeIntensive.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
