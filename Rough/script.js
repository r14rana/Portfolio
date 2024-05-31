document.addEventListener("DOMContentLoaded", () => {
    const streakCountElement = document.getElementById("streak-count");
    const incrementButton = document.getElementById("increment-btn");
    const resetButton = document.getElementById("reset-btn");

    // Load streak count from local storage or set to 0 if not available
    let streakCount = parseInt(localStorage.getItem("streakCount")) || 0;
    streakCountElement.textContent = streakCount;

    incrementButton.addEventListener("click", () => {
        streakCount++;
        streakCountElement.textContent = streakCount;
        localStorage.setItem("streakCount", streakCount);
    });

    resetButton.addEventListener("click", () => {
        streakCount = 0;
        streakCountElement.textContent = streakCount;
        localStorage.setItem("streakCount", streakCount);
    });
});
