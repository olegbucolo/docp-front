function setTheme(theme) {
    const html = document.documentElement;

    if (theme === "dark") {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
} s