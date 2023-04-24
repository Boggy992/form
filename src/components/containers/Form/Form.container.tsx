import React, { FC, FormEvent } from 'react';
import { FormProps } from './models';

const Form: FC<FormProps> = ({ currentValues, onSubmit, children }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(currentValues);
    console.log(currentValues);
  };

  return <form onSubmit={(event) => handleSubmit(event)}>{children}</form>;
};

export default Form;
