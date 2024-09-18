import React, { FC } from "react";
import {
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

interface IInput {
  value?: string;
  placeholder?: string;
  name?: string;
  extraClass?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput: FC<IInput> = ({
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
      value={value || ""}
      name={name}
      error={false}
      errorText={"Ошибка"}
      size={"default"}
      extraClass={extraClass}
      required={true}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

export const EmailCustomInput: FC<IInput> = ({
  extraClass,
  value,
  onChange,
}) => {
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

export const PasswordCustomInput: FC<IInput> = ({
  value,
  extraClass,
  onChange,
}) => {
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

export const EditEmailInput: FC<IInput> = ({ value, onChange }) => {
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

export const EditPasswordInput: FC<IInput> = ({ value, onChange }) => {
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

export const EditNameInput: FC<IInput> = ({ value, onChange }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onIconClick = (): void => {
    if (inputRef.current && inputRef.current.disabled === false) {
      inputRef.current.disabled = true;
      setTimeout(() => inputRef.current?.focus(), 0);
      (inputRef.current as any).success = true;
    } else {
      if (inputRef.current) {
        inputRef.current.disabled = false;
      }
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
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};
