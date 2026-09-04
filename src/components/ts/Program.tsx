import { useState } from 'react';
import { scrollTo } from '../../utils/Scroll';
import '../css/Program.css';

const courses = [
  {
    id: 'program_first',
    tag: 'Интенсив',
    tagColor: '#6366f1',
    icon: '⚛️',
    title: 'Frontend-разработчик',
    subtitle: 'React',
    duration: '3 дня · 3 урока',
    description: 'Освой базу веб-разработки',
    topics: [
      'HTML5, CSS3, Flexbox/Grid',
      'JavaScript ES6+',
      'React + Hooks',
      'Redux Toolkit',
      'Git',
    ],
    color: '#6366f1',
  },
];

const Program = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="program">
      <div className="section_program__wrap">
        <div className="section_program__wrap__header">
          <span>ПРОГРАММА ИНТЕНСИВА</span>
          <h2>
            Записывайся на{' '}
            <span className="section_program__wrap__header__text-gradient">
              интенсив
            </span>
          </h2>
          <p>На интенсиве научитесь создавать ToDo лист</p>
        </div>
        <div className="section_program__wrap__buttons">
          {courses.map((c, i) => (
            <button
              className={`${active === i ? 'active' : ''}`}
              key={c.title}
              id={c.id}
              onClick={() => setActive(i)}
            >
              <span>{c.icon}</span>
              <span>{c.title}</span>
            </button>
          ))}
        </div>
        {courses.map((course, i) => (
          <div
            className={`${
              active === i
                ? 'section_program__wrap__course-card active'
                : 'section_program__wrap__course-card'
            }`}
            key={course.title}
            id={course.id}
          >
            <div>
              <div className="section_program__wrap__course-card__info">
                <span id={course.id} />
                <span
                  className="section_program__wrap__course-card__info__tag"
                  id={course.id}
                >
                  {course.tag}
                </span>
              </div>
              <div className="section_program__wrap__course-card__info__icon">
                {course.icon}
              </div>
              <h3>{course.title}</h3>
              <p
                className="section_program__wrap__course-card__info__subtitle"
                id={course.id}
              >
                {course.subtitle}
              </p>
              <p className="section_program__wrap__course-card__info__duration">
                {course.duration}
              </p>
              <p className="section_program__wrap__course-card__info__description">
                {course.description}
              </p>
            </div>
            <div className="section_program__wrap__course-card__topics">
              <p className="section_program__wrap__course-card__topics__q">
                Что изучишь
              </p>
              <div className="section_program__wrap__course-card__topics__list">
                {course.topics.map((topic, ti) => (
                  <div
                    className="section_program__wrap__course-card__topics__list-item"
                    key={topic}
                  >
                    <div
                      className="section_program__wrap__course-card__topics__list-item__index"
                      id={course.id}
                    >
                      {ti + 1}
                    </div>
                    <span className="section_program__wrap__course-card__topics__list-item__topic">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="section_program__wrap__course-card__button"
                id={course.id}
                onClick={() => scrollTo('#register')}
              >
                Записаться на интенсив: {course.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
