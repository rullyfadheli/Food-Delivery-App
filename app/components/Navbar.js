import Navigator from "./Navigator";

const Navbar = () => {
  const phoneNumber = 6285783052362;
  const message = `Hey, I want to ask about this product`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className={`px-6 max-w-[766px] flex items-center fixed left-1/2 transform -translate-x-1/2 bottom-0 bg-[#181818] pt-3 pb-1 md:h-15 w-full rounded-t-3xl z-50`}
    >
      <ul className="flex justify-between w-full">
        <li>
          <Navigator link="/" text={<img src="Home.png"></img>} />
        </li>
        <li>
          <Navigator link={url} text={<img src="Chat.png"></img>} />
        </li>
        <li>
          <Navigator link="/bag" text={<img src="Bag.png"></img>} />
        </li>
        <li>
          <Navigator
            link="/profile"
            text={<img src="Profile_Icon.png"></img>}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
