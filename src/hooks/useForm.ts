import { useState } from "react";

interface InputValues {
  [key: string]: string;
}

export function useForm(inputValues: InputValues = {}): {
  values: InputValues;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setValues: React.Dispatch<React.SetStateAction<InputValues>>;
} {
  const [values, setValues] = useState<InputValues>(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
