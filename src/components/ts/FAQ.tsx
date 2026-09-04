import { useState } from 'react';
import { Index } from 'src/types';
import '../css/FAQ.css';

const faqs = [
  {
    q: 'Нужен ли опыт в программировании для поступления?',
    a: 'Нет! Наш интенсив разработан так, чтобы с нуля провести тебя от основ до уровня специалиста. Главное — желание учиться.',
  },
  {
    q: 'Сколько времени нужно уделять учёбе?',
    a: 'В среднем 3-5 часов в день. Интенсив будет идти в течение 3 дней.',
  },
  {
    q: 'Как проходят занятия?',
    a: 'Каждый день будет идти прямой эфир в течение 2 часов. В конце прямого эфира преподаватель даст домашнее задание. Все записи доступны в любое время без ограничений.',
  },
  {
    q: 'Что происходит после окончания интенсива?',
    a: 'После окончания интенсива у тебя будет готовый проект для портфолио и сертификат о прохождении интенсива.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<Index>(null);

  return (
    <section id="faq">
      <div className="section_faq__wrap">
        <div className="section_faq__wrap__header">
          <span>ВОПРОСЫ И ОТВЕТЫ</span>
          <h2>
            Часто задаваемые{' '}
            <span className="section_faq__wrap__header__text-gradient">
              вопросы
            </span>
          </h2>
          <p>Не нашли ответ? Напишите нам — ответим в течение 30 минут</p>
        </div>
        <div className="section_faq__wrap__accordion">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${
                openIndex === i
                  ? 'section_faq__wrap__accordion__item show'
                  : 'section_faq__wrap__accordion__item'
              }`}
            >
              <button
                className="section_faq__wrap__accordion__item__button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className={`${
                    openIndex === i
                      ? 'section_faq__wrap__accordion__item__button__question show'
                      : 'section_faq__wrap__accordion__item__button__question'
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`${
                    openIndex === i
                      ? 'section_faq__wrap__accordion__item__button__div show'
                      : 'section_faq__wrap__accordion__item__button__div'
                  }`}
                >
                  <span
                    className={`${
                      openIndex === i
                        ? 'section_faq__wrap__accordion__item__button__div__plus show'
                        : 'section_faq__wrap__accordion__item__button__div__plus'
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>

              <div
                className={`${
                  openIndex === i
                    ? 'section_faq__wrap__accordion__item__answer show'
                    : 'section_faq__wrap__accordion__item__answer'
                }`}
              >
                <p className="section_faq__wrap__accordion__item__answer__text">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
