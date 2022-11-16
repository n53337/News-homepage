import logo from "./../../assets/images/logo.svg";
import icon from "./../../assets/images/icon-menu.svg";
import iconClose from "./../../assets/images/icon-menu-close.svg";
export default function Header() {
  const headerLinks = [
    ["home", "#"],
    ["New", "#"],
    ["Popular", "#"],
    ["Trending", "#"],
    ["Categories", "#"],
  ];

  const headerList = headerLinks.map((e) => {
    return (
      <a
        key={e[0]}
        href={e[1]}
        className="text-lightblue hover:text-red transition duration-150"
      >
        {e[0]}
      </a>
    );
  });

  const toogleIcon = (e) => {
    e.target.dataset.icon = e.target.dataset.icon === "open" ? "close" : "open";
    e.target.src = e.target.dataset.icon === "open" ? icon : iconClose;
    if (e.target.dataset.icon === "open") {
      e.target.nextSibling.classList.add("hidden");
    } else {
      e.target.nextSibling.classList.remove("hidden");
    }
  };

  return (
    <header className="px-10 py-5 flex justify-between items-center">
      <img className="w-12 sm:w-20" src={logo} alt="website logo" />
      <nav className="hidden sm:flex sm:gap-8">{headerList}</nav>
      <img
        className="sm:hidden z-50 cursor-pointer"
        src={icon}
        alt="toogle menu"
        onClick={toogleIcon}
        data-icon="open"
      />
      <nav
        className="sm:hidden absolute h-screen top-0 right-0 bg-white shadow-2xl flex flex-col px-20 content-center
      justify-center gap-10 text-center min-w-[50%] hidden"
      >
        {headerList}
      </nav>
    </header>
  );
}
