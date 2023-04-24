export type UserInfo = {
  email: string;
  age: number;
  name: string;
  phone: {
    ext: string;
    number: string;
  };
  [index: string]: {};
};

export interface FormProps {
  currentValues: UserInfo;
  onSubmit: (users: UserInfo) => void;
  children: Array<JSX.Element>;
}
