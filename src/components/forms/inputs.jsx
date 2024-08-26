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
      value={value || ''}
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
        value={value || ''}
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
        value={value || ''}
        name={"password"}
        extraClass={extraClass}
        error={false}
        placeholder={placeholder}
        required={true}
      />
    </div>
  );
};

export const EditEmailInput = () => {
  const [value, setValue] = React.useState('bob@example.com')
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <EmailInput
        onChange={onChange}
        value={value || ''}
        name={'email'}
        placeholder="Логин"
        isIcon={true}
      />
    </div>
  )
}

export const EditPasswordInput = () => {
  const [value, setValue] = React.useState('password')
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <PasswordInput
        onChange={onChange}
        value={value || ''}
        name={'password'}
        icon="EditIcon"
      />
    </div>
  )
}

export const EditNameInput = () => {
  const [value, setValue] = React.useState('value')
  const inputRef = React.useRef(null)
  const onIconClick = () => {
    if (inputRef.current.disabled === false) {
      inputRef.current.disabled = true;
      setTimeout(() => inputRef.current.focus(), 0)
      inputRef.current.success = true;
    } else {
      inputRef.current.disabled = false;
    }
  }
  return (
    <Input
      type={'text'}
      disabled={true}
      placeholder={'Имя'}
      onChange={e => setValue(e.target.value)}
      icon={'EditIcon'}
      value={value || ''}
      name={'name'}
      error={false}
      ref={inputRef}
      onIconClick={onIconClick}
      errorText={'Ошибка'}
      size={'default'}
    />
  )
}