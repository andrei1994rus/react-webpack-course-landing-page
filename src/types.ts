import { FormEvent } from 'react';

export type LetterConfig = string | undefined;
export type Star = { count: number };
export type Errors = Record<string, string>;
export type Index = number | null;

export interface FEvent extends FormEvent<HTMLFormElement> {}
