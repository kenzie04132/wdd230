document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright").textContent = `© ${currentYear} Mackenzie Ash, Texas`;
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;
});