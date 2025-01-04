import Link from "next/link";

const Navigator = (value) => {
  const { style, text, link } = value;

  return (
    <Link href={`${link}`}>
      <button className={style}>{text}</button>
    </Link>
  );
};

export default Navigator;
