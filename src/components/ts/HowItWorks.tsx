import '../css/HowItWorks.css';

const steps = [
  {
    /* hiw is "how it works"*/
    id: 'first_hiw',
    num: '01',
    icon: '🎯',
    title: 'Изучи информацию о интенсиве',
    desc: 'Изучи информацию о интенсиве и реши, нужен тебе интенсив или нет.',
    color: '#6366f1',
  },
  {
    id: 'second_hiw',
    num: '02',
    icon: '📝',
    title: 'Оставь заявку',
    desc: 'Заполни форму — имя, email. После этого придёт письмо с анонсом интенсива.',
    color: '#a855f7',
  },
  {
    id: 'thirst_hiw',
    num: '03',
    icon: '🚀',
    title: 'Начни обучение',
    desc: 'Заходи на прямой эфир, когда начнётся интенсив.',
    color: '#ec4899',
  },
];

const HowItWorks = () => {
  return (
    <section className="how_it_works">
      <div className="how_it_works__wrap">
        <div>
          <span>КАК ЭТО РАБОТАЕТ</span>
          <h2>
            3 шага до{' '}
            <span className="how_it_works__wrap__text-gradient">
              новой профессии
            </span>
          </h2>
          <p>Простой и понятный путь от записи до начала обучения</p>
        </div>

        <div className="how_it_works__wrap__steps">
          {steps.map((step, i) => (
            <div
              className="how_it_works__wrap__steps__item"
              id={step.id}
              key={step.num}
            >
              {i < steps.length - 1 && (
                <div className="how_it_works__wrap__steps__item__step_connector" />
              )}

              <div className="how_it_works__wrap__steps__item__top">
                <div className="how_it_works__wrap__steps__item__top__icon">
                  {step.icon}
                </div>
                <span className="how_it_works__wrap__steps__item__top__number">
                  {step.num}
                </span>
              </div>

              <h3 className="how_it_works__wrap__steps__item__title">
                {step.title}
              </h3>
              <p className="how_it_works__wrap__steps__item__description">
                {step.desc}
              </p>

              <div className="how_it_works__wrap__steps__item__bottom" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
