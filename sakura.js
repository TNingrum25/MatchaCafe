document.addEventListener("DOMContentLoaded", function () {
    const numFlowers = 20; // Number of sakura flowers on screen
    const container = document.getElementById("sakura-container"); // Limit to this container
    const body = document.body;

    for (let i = 0; i < numFlowers; i++) {
        createSakuraFlower();
    }

    function createSakuraFlower() {
        const flower = document.createElement("div");
        flower.classList.add("sakura");

        // Random starting position
        flower.style.left = Math.random() * 100 + "vw";

        // Longer duration for slower falling
        const fallDuration = Math.random() * 5 + 10; // Between 10s - 15s
        flower.style.animationDuration = fallDuration + "s";

        // Staggered start times
        flower.style.animationDelay = Math.random() * 5 + "s";

        body.appendChild(flower);

        // Remove the flower after it fully falls
        setTimeout(() => {
            flower.remove();
            createSakuraFlower(); // Regenerate to keep animation continuous
        }, fallDuration * 1000); // Convert seconds to milliseconds
    }
});
