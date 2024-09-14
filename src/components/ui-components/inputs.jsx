import React from "react";
import {
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const CustomInput = ({
  value,
  placeholder,
  onChange,
  name,
  extraClass,
}) => {
  return (
    <Input
      type={"text"}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      error={false}
      errorText={"Ошибка"}
      size={"default"}
      extraClass={extraClass}
      required={true}
    />
  );
};

export const EmailCustomInput = ({ extraClass, value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <EmailInput
        onChange={onChange}
        value={value || ""}
        name={"email"}
        isIcon={false}
        errorText="Введите корректный e-mail"
        extraClass={extraClass}
        required={true}
      />
    </div>
  );
};

export const PasswordCustomInput = ({ value, extraClass, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PasswordInput
        onChange={onChange}
        value={value || ""}
        name={"password"}
        extraClass={extraClass}
        error={false}
        required={true}
      />
    </div>
  );
};

export const EditEmailInput = ({ value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <EmailInput
        onChange={onChange}
        value={value || ""}
        name={"email"}
        placeholder={"Логин"}
        isIcon={true}
      />
    </div>
  );
};

export const EditPasswordInput = ({ value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PasswordInput
        onChange={onChange}
        value={value || ""}
        name={"password"}
        icon="EditIcon"
      />
    </div>
  );
};

export const EditNameInput = ({ value, onChange }) => {
  const inputRef = React.useRef(null);

  const onIconClick = () => {
    if (inputRef.current.disabled === false) {
      inputRef.current.disabled = true;
      setTimeout(() => inputRef.current.focus(), 0);
      inputRef.current.success = true;
    } else {
      inputRef.current.disabled = false;
    }
  };
  return (
    <Input
      type={"text"}
      disabled={true}
      placeholder={"Имя"}
      onChange={onChange}
      icon={"EditIcon"}
      value={value || ""}
      name={"name"}
      error={false}
      ref={inputRef}
      onIconClick={onIconClick}
      errorText={"Ошибка"}
      size={"default"}
    />
  );
};
