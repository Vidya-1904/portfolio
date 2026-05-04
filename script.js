function showSection(id) {
    document.querySelectorAll(".content").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) target.classList.add("active");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.getElementById("themeIcon").className =
        document.body.classList.contains("dark") ? "fas fa-sun" : "fas fa-moon";
});
