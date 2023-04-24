import React, { createContext, useState } from 'react';
import { UserInfo } from '../components/containers/Form/models';

interface FormContextProps {
  userInfo: UserInfo;
  setUserInfo: (user: any) => void;
}

interface FormProviderProps {
  children: Array<JSX.Element> | JSX.Element;
}

const defaultState = {
  userInfo: {
    email: '',
    age: 0,
    name: '',
    phone: {
      ext: '',
      number: '',
    },
  },
  setUserInfo: () => null,
};

export const FormContext = createContext<FormContextProps>(defaultState);

const FormProvider = ({ children }: FormProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultState.userInfo);

  const value = { userInfo, setUserInfo };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
