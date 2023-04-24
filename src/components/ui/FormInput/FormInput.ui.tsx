import React, { FC, ChangeEvent, useContext } from 'react';
import { FormInputProps } from './models';
import { FormContext } from '../../../context/form.context';
import { UserInfo } from '../../containers/Form/models';

const FormInput: FC<FormInputProps> = ({ name, ...rest }) => {
  const { setUserInfo } = useContext(FormContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevInfo: UserInfo) => {
      if (!name?.includes('.')) {
        return {
          ...prevInfo,
          [name as string]: event.target.value,
        };
      }
      const [firstName, secondName] = name?.split('.');

      return {
        ...prevInfo,
        [firstName]: {
          ...prevInfo[firstName],
          [secondName]: event.target.value,
        },
      };
    });
  };

  return (
    <>
      <div>
        {name && <label>{name?.split('.').join(' ')}</label>}
        <input
          name={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
          {...rest}
        ></input>
      </div>
    </>
  );
};

export default FormInput;
