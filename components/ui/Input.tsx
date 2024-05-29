"use client";
import { inputInterface } from "@/utils/Interface";

const Input = ({ name, value, placeholder, type }: inputInterface) => {
  return (
    <input type={type} name={name} value={value} placeholder={placeholder} />
  );
};

export default Input;
