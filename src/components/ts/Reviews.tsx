import { Star } from 'src/types';
import '../css/Reviews.css';

const reviews = [
  {
    name: 'Алексей Морозов',
    avatar: 'АМ',
    color: '#6366f1',
    stars: 5,
    text: 'Честно, шёл на интенсив без особых ожиданий — просто хотел «попробовать». В итоге получил намного больше, чем рассчитывал. Очень понравилась подача: без воды, всё структурировано и по делу. Отдельно ценю, что можно было задавать любые вопросы и получать развернутые ответы. После интенсива появилось чёткое понимание, что и как делать дальше.',
  },
  {
    name: 'Мария Соколова',
    avatar: 'МС',
    color: '#ec4899',
    stars: 5,
    text: 'Интенсив оказался очень насыщенным. Иногда даже приходилось пересматривать материалы, чтобы всё уложилось 😊 Но это плюс — чувствуется глубина проработки. Атмосфера была комфортной, без давления, при этом держали хороший темп. Рекомендую тем, кто хочет реального прогресса, а не просто «послушать».',
  },
  {
    name: 'Дмитрий Лебедев',
    avatar: 'ДЛ',
    color: '#22c55e',
    stars: 5,
    text: 'Для меня самым ценным оказалось ощущение системы. До этого знания были разрозненными, а тут всё разложили по полочкам. Понравился живой формат и реальные примеры, а не абстрактная теория. Уже начал применять — и вижу первые результаты. Спасибо за мотивацию и поддержку!',
  },
  {
    name: 'Екатерина Волкова',
    avatar: 'ЕВ',
    color: '#f97316',
    stars: 5,
    text: 'Самое ценное для меня — поддержка в процессе. Не было ощущения, что ты один на один с материалом. Всегда можно получить обратную связь и уточнить детали. Это сильно повышает уверенность и скорость внедрения.',
  },
  {
    name: 'Игорь Петров',
    avatar: 'ИП',
    color: '#a855f7',
    stars: 5,
    text: 'Для меня этот интенсив стал хорошей точкой перезагрузки. Я пришёл с кашей в голове, а вышел с планом действий на ближайшие месяцы. Понравилось, что много внимания уделяется мышлению и внутреннему состоянию, а не только инструментам.',
  },
  {
    name: 'Анна Козлова',
    avatar: 'АК',
    color: '#06b6d4',
    stars: 5,
    text: 'Интенсив дал мне уверенность. Раньше откладывал, сомневался, не знал, с чего начать. Сейчас есть чёткое понимание первых шагов. Плюс круто, что материалы останутся и к ним можно вернуться.',
  },
];

const Stars = ({ count }: Star) => {
  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="section_reviews__wrap">
        <div className="section_reviews__wrap__header">
          <span>ОТЗЫВЫ УЧАСТНИКОВ ИНТЕНСИВА</span>
          <h2>
            200 историй{' '}
            <span className="section_reviews__wrap__header__text-gradient">
              успеха
            </span>
          </h2>
          <p>
            Реальные люди, которые изменили свою жизнь с помощью наших курсов
          </p>
        </div>
        <div className="section_reviews__wrap__review-cards">
          {reviews.map((r, i) => (
            <div
              className="section_reviews__wrap__review-cards__item"
              key={r.name}
              id={`review_${i + 1}`}
            >
              <div className="section_reviews__wrap__review-cards__item__author">
                <div
                  className="section_reviews__wrap__review-cards__item__author__avatar"
                  id={`review_${i + 1}`}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="section_reviews__wrap__review-cards__item__author__name">
                    {r.name}
                  </p>
                </div>
              </div>
              <div className="section_reviews__wrap__review-cards__item__stars">
                <Stars count={r.stars} />
              </div>
              <p className="section_reviews__wrap__review-cards__item__text">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
