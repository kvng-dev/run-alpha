/* eslint-disable react/prop-types */

import  { useState } from "react";
import classNames from "classnames";

export default function Input({
  type = "text",
  placeHolder,
  name,
  className,
  defaultValue,
  onClick,
  handleChange,
  size = "large",
}) {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (handleChange) handleChange(event.target.value);
  };

  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-7 py-2 text-base",
    large: "px-10 py-2 text-[14px] w-full max-w-[453px]",
    extraLarge: "px-14 py-3 text-[14px] w-full max-w-[528px]",
  };

  return (
    <input
      type={type}
      placeholder={placeHolder}
      name={name}
      className={classNames(
        sizeStyles[size],
        className,
        "rounded-[5px] border-[1px] text-black border-[#9F9F9F] py-2 px-4 outline-none"
      )}
      defaultValue={defaultValue}
      value={inputValue}
      onClick={onClick}
      onChange={handleInputChange}
    />
  );
}
