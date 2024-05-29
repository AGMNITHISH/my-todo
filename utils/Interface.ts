import React, { ReactNode } from "react";

export interface formInterface {
  children: React.ReactNode;
  onSubmit?: () => void;
  className?: string;
  action: (formData: FormData) => Promise<void | boolean>;
}

export interface inputInterface {
  name: string;
  value?: string;
  placeholder?: string;
  type: string;
}

export interface btnInterface {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  text: string | ReactNode;
  actionButton?: boolean;
}
