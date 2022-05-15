import { useTheme } from "next-themes";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <button
      aria-label={
        theme === "light" ? "Switch to darkmode" : "Switch to lightmode"
      }
      className="hover:text-light-accent  dark:hover:text-dark-accent p-3 justify-center items-center rounded-lg"
      onClick={toggleTheme}>
      {theme === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
};

export default ToggleDarkMode;
