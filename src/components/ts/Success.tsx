import React from 'react';
import { SuccessProps } from '../../types';
export const Success: React.FC<SuccessProps> = ({ close, name }) => {
  return (
    <div className="section_register__wrap__form-card__success">
      <div
        className="section_register__wrap__form-card__success__close"
        onClick={close}
      >
        &#88;
      </div>
      <div>✓</div>
      <h3>Заявка принята!</h3>
      <p className="section_register__wrap__form-card__success__greeting">
        Привет, <strong>{name}</strong>! <span>🎉</span> Проверь свою почту.
        Письмо может быть в папке Спам.
      </p>
    </div>
  );
};
