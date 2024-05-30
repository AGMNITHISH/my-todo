"use client";
import { btnInterface } from "@/utils/Interface";
import React from "react";

const Button = ({
  text,
  actionButton,
  onClick,
  type,
}: btnInterface): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        actionButton
          ? `bg-orange-700 rounded-full p-2 text-white`
          : `bg-orange-700 px-2 text-white`
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
