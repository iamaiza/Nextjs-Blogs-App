const { createContext, useState, useEffect } = require("react");

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState();

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleThemeHandler = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === "light" ? "dark" : "light"
            localStorage.setItem('theme', newTheme)
            return newTheme
        });
    };

    const ctxValues = {
        theme: theme,
        toggleTheme: toggleThemeHandler
    }

    return <ThemeContext.Provider value={ctxValues}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeContextProvider }
