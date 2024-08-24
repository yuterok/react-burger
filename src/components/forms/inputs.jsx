import React from "react";
import {
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const CustomInput = ({
  value='',
  setValue,
  placeholder,
  name,
  extraClass,
}) => {
  const inputRef = React.useRef(null);
  return (
    <Input
      type={"text"}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      name={name}
      error={false}
      ref={inputRef}
      errorText={"Ошибка"}
      size={"default"}
      extraClass={extraClass}
      required={true}
    />
  );
};

export const EmailCustomInput = ({ extraClass, value='', setValue }) => {
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <EmailInput
        onChange={onChange}
        value={value}
        name={"email"}
        isIcon={false}
        errorText="Введите корректный e-mail"
        extraClass={extraClass}
        required={true}
      />
    </div>
  );
};

export const PasswordCustomInput = ({
  value='',
  setValue,
  placeholder,
  extraClass,
}) => {
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PasswordInput
        onChange={onChange}
        value={value}
        name={"password"}
        extraClass={extraClass}
        error={false}
        placeholder={placeholder}
        required={true}
      />
    </div>
  );
};
