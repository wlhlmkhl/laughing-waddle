import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  // const themes = useSelector((state) => state.settings.themes);
  // const currentTheme = themes.find((theme) => theme.active);
  const currentTheme = useSelector((state) =>
    state.settings.themes.find((theme) => theme.active)
  );

  return (
    <nav
      className={`font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full ${currentTheme?.headerStyle}`}
    >
      <div className="mb-2 sm:mb-0">
        <Link to="/" className="text-2xl no-underline hover:text-blue-dark">
          Cards
        </Link>
      </div>
      <div>
        <p className="text-2xl no-underline font-extrabold font-sans italic">
          E-PLÅNKAN
        </p>
      </div>
      <div>
        <Link to="/settings" className="text-lg no-underline ml-2">
          Settings
        </Link>
      </div>
    </nav>
  );
}
