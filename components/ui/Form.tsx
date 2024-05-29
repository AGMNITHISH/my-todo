"use client";
import { formInterface } from "@/utils/Interface";
import React, { useRef } from "react";

const Form = ({ children, onSubmit, className, action }: formInterface) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      ref={ref}
      action={async (FormData) => {
        await action(FormData);
        ref.current?.reset();
      }}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
