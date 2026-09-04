import '../css/About.css';

const features = [
  {
    id: 'first_about',
    icon: '🎯',
    title: 'Практика с первого дня',
    desc: 'Никакой теории без практики. С первого урока ты пишешь реальный код и собираешь проект в портфолио.',
    color: '#6366f1',
  },
  {
    id: 'second_about',
    icon: '👨‍💻',
    title: 'Живые менторы',
    desc: 'Опытные разработчики из топовых компаний будут сопровождать тебя во время обучения.',
    color: '#a855f7',
  },
  {
    id: 'thirst_about',
    icon: '👥',
    title: 'Сообщество',
    desc: 'Вступай в закрытое сообщество из 2400+ выпускников — нетворкинг, вакансии, поддержка.',
    color: '#06b6d4',
  },
  {
    id: 'fourth_about',
    icon: '📜',
    title: 'Сертификат',
    desc: 'Получи сертификат, подтверждающий прохождение интенсива.',
    color: '#22c55e',
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="section_about___wrap">
        <div className="section_about__wrap__header">
          <span>ПОЧЕМУ МЫ</span>
          <h2>
            Всё, что нужно для
            <br />
            <span className="section_about__wrap__header__text-gradient">
              успешного старта
            </span>
          </h2>
          <p>
            Мы создали среду, в которой учиться легко, а результат — предсказуем
          </p>
        </div>
        <div className="section_about__wrap__features">
          {features.map((f) => (
            <div
              className="section_about__wrap__features__item"
              id={f.id}
              key={f.title}
            >
              <div className="section_about__wrap__features__item__icon">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
