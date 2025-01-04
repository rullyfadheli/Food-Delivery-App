"use client";

const Button = (value) => {
  const { style, text, onClick } = value;

  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
