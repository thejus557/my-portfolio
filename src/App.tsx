import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState<"dark" | null>(null);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme(null);
    }
  }, []);

  return (
    <div className={`main-app ${theme === "dark" ? "dark" : null}`}>
      <div
        className={`h-full ${theme === "dark" ? "dark:bg-black" : "bg-white"}`}
      >
        <button
          className="bg-gray-600 dark:bg-white"
          onClick={() =>
            setTheme((prev) => {
              return prev === "dark" ? null : "dark";
            })
          }
        >
          Toggle - {theme}
        </button>
      </div>
    </div>
  );
};

export default App;
