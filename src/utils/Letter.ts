import emailjs from '@emailjs/browser';
import { LetterConfig } from '../types';

const SERVICE_ID: LetterConfig = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID: LetterConfig = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY: LetterConfig = process.env.REACT_APP_PUBLIC_KEY;

const sendLetter = (sentName: string, sentEmail: string) => {
  const templateParams = {
    name: sentName,
    email: sentEmail,
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY,
    })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        console.log('FAILED!', err);
      }
    );
};

export default sendLetter;
