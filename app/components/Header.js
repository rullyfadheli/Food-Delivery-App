import Navigator from "./Navigator";

const Header = (data) => {
  const { buttonTextLeft, style, buttonTextRight, title, linkBack, linkMenu } =
    data;

  return (
    <nav className={`flex justify-between h-16 w-full ${style}`}>
      <Navigator
        link={linkBack}
        style="rounded-full h-12 w-12 p-4 my-1 bg-[#FFF8EF]"
        text={buttonTextLeft}
      />

      <p className="font-inter text-md p-4 text-center">{title}</p>

      <Navigator
        linkMenu={linkMenu}
        style="font-inter font-semibold rounded-full h-12 w-12 bg-[#FFF8EF] my-1 flex justify-center items-center"
        text={buttonTextRight}
      />
    </nav>
  );
};

export default Header;
