import getModal from '../../utils/getModal';
import '../css/Modal.css';

const Modal = () => {
  const closeModal = () => {
    const modal = getModal() as HTMLElement;
    modal.classList.remove('open');
  };

  return (
    <>
      <div className="modal__modal_body">
        <div className="modal__modal_body__close" onClick={() => closeModal()}>
          &#88;
        </div>
        <h1>Политика конфиденциальности и обработки персональных данных</h1>

        <span>
          <strong>Дата последнего обновления:</strong> 03 сентября 2026 г.
        </span>
        <br></br>
        <span>
          <strong>Оператор:</strong> CodeIntensive
        </span>
        <br></br>
        <div>
          Уважая ваше право на приватность, мы в CodeIntensive собираем только
          те данные, которые необходимы для качественного проведения интенсива.
          Мы не продаем ваши данные третьим лицам и не используем их для
          скрытого маркетинга.
        </div>
        <h2>1. Какие данные мы собираем?</h2>
        <span>Имя и адресс электронной почты.</span>
        <h2>2. Зачем мы их используем?</h2>
        <span>
          <strong>Коммуникация:</strong> Чтобы присылать уведомления о старте
          вебинаров, напоминания о дедлайнах и ответы от кураторов.
        </span>
        <br></br>
        <span>
          <strong>Документы:</strong> Для формирования и отправки электронного
          сертификата об окончании интенсива.
        </span>
      </div>
    </>
  );
};

export default Modal;
