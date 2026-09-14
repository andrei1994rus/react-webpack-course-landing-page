import { useState, CSSProperties, lazy } from 'react';
import { Errors, FEvent } from 'src/types';
import sendLetter from '../../utils/Letter';
import '../css/Register.css';
import getModal from '../../utils/getModal';
import withSuspense from '../../hoc/withSuspense';

const Success = lazy(() =>
  import('./Success').then((module) => ({ default: module.Success }))
);
const Modal = lazy(() => import('./Modal'));

const WithSuspenseSuccess = withSuspense(Success);
const WithSuspenseModal = withSuspense(Modal);

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const err: Errors = {};
    if (!form.name.trim()) err.name = 'Введите ваше имя';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = 'Введите корректный email';
    if (!form.agree) err.agree = 'Необходимо согласие';
    return err;
  };

  const handleSubmit = (e: FEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    sendLetter(form.name, form.email);
    setSubmitted(true);
  };

  const inputStyle = (field: string): CSSProperties => ({
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: `1px solid ${errors[field] ? '#ef4444' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 12,
    color: '#fff',
    fontSize: 15,
    padding: '14px 18px',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  });

  const openModal = () => {
    const modal = getModal() as HTMLElement;
    modal.classList.add('open');
  };

  const closeSuccess = () => {
    setSubmitted(false);
  };

  return (
    <section id="register">
      <WithSuspenseModal />
      <div className="section_register_decorative1" />
      <div className="section_register_decorative2" />
      <div className="section_register__wrap">
        <div className="section_register__wrap__header">
          <span>
            <span>🎓</span> ЗАПИСЬ НА ИНТЕНСИВ
          </span>
          <h2>
            Начни своё{' '}
            <span className="section_register__wrap__header__text-gradient">
              будущее
            </span>{' '}
            сегодня
          </h2>
        </div>
        <div className="section_register__wrap__form-card">
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <div className="section_register__wrap__form-card__name">
                  <label>Ваше имя *</label>
                  <input
                    type="text"
                    placeholder="Иван"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      setErrors({ ...errors, name: '' });
                    }}
                    style={inputStyle('name')}
                    onFocus={(e) =>
                      !errors.name &&
                      ((e.target as HTMLElement).style.borderColor =
                        'rgba(99,102,241,0.6)')
                    }
                    onBlur={(e) =>
                      !errors.name &&
                      ((e.target as HTMLElement).style.borderColor =
                        'rgba(255,255,255,0.1)')
                    }
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
              </div>
              <div className="section_register__wrap__form-card__email">
                <label>Email *</label>
                <input
                  type="email"
                  placeholder="ivan@example.com"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setErrors({ ...errors, email: '' });
                  }}
                  style={inputStyle('email')}
                  onFocus={(e) =>
                    !errors.email &&
                    ((e.target as HTMLElement).style.borderColor =
                      'rgba(99,102,241,0.6)')
                  }
                  onBlur={(e) =>
                    !errors.email &&
                    ((e.target as HTMLElement).style.borderColor =
                      'rgba(255,255,255,0.1)')
                  }
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className="section_register__wrap__form-card__agree">
                <label>
                  <div
                    className={`${
                      form.agree
                        ? 'section_register__wrap__form-card__agree__checker agree'
                        : errors.agree
                        ? 'section_register__wrap__form-card__agree__checker error'
                        : 'section_register__wrap__form-card__agree__checker'
                    }`}
                    onClick={() => {
                      setForm({ ...form, agree: !form.agree });
                      setErrors({ ...errors, agree: '' });
                    }}
                  >
                    {form.agree && <span>✓</span>}
                  </div>
                  <span className="section_register__wrap__form-card__agree__condition">
                    Я соглашаюсь с{' '}
                    <span onClick={openModal}>
                      политикой конфиденциальности
                    </span>{' '}
                    и даю согласие на обработку персональных данных
                  </span>
                </label>
                {errors.agree && (
                  <p className="section_register__wrap__form-card__agree__error">
                    {errors.agree}
                  </p>
                )}
              </div>
              <button type="submit">
                Записаться на интенсив <span>🚀</span>
              </button>
              <p className="section_register__wrap__form-card__warning">
                <span>🔒</span> Ваши данные защищены и не передаются третьим
                лицам
              </p>
            </form>
          ) : (
            <WithSuspenseSuccess close={closeSuccess} name={form.name} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Register;
