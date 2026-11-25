
document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // TRISH'S GRADUATION WEBSITE
    // COMPLETE JAVASCRIPT
    // =========================================


    // =========================================
    // 1. HERO SURPRISE BUTTON
    // =========================================

    const openButton = document.getElementById("openSurprise");

    if (openButton) {
        openButton.addEventListener("click", function () {

            document.getElementById("celebrate")
                .scrollIntoView({
                    behavior: "smooth"
                });

            launchConfetti(24);
        });
    }


    // =========================================
    // 2. FINAL CELEBRATION BUTTON
    // =========================================

    const celebrateButton = document.getElementById("celebrateBtn");
    const toast = document.getElementById("toast");

    if (celebrateButton) {
        celebrateButton.addEventListener("click", function () {

            launchConfetti(75);

            if (toast) {
                toast.classList.add("show");

                window.setTimeout(function () {
                    toast.classList.remove("show");
                }, 3200);
            }
        });
    }


    // =========================================
    // 3. SPECIAL GRADUATION SURPRISE
    // =========================================

    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseMessage = document.getElementById("surpriseMessage");

    if (surpriseButton && surpriseMessage) {

        surpriseButton.addEventListener("click", function () {

            surpriseMessage.classList.remove("hidden");

            surpriseButton.textContent = "Surprise Opened! ❤️";
            surpriseButton.disabled = true;

            launchConfetti(100);

            surpriseMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    }


    // =========================================
    // 4. CONFETTI FUNCTION
    // =========================================

    function launchConfetti(amount) {

        const symbols = ["✦", "✧", "♡", "✳", "🎓", "✨"];

        const colors = [
            "#f2a9c8",
            "#bca8f4",
            "#e9cf9a",
            "#ffffff"
        ];

        for (let i = 0; i < amount; i++) {

            const piece = document.createElement("span");

            piece.className = "confetti";

            piece.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            piece.style.left = Math.random() * 100 + "vw";

            piece.style.animationDelay =
                Math.random() * 0.8 + "s";

            piece.style.fontSize =
                (12 + Math.random() * 18) + "px";

            piece.style.color =
                colors[Math.floor(Math.random() * colors.length)];

            document.body.appendChild(piece);

            window.setTimeout(function () {
                piece.remove();
            }, 4500);

        }
    }


    // =========================================
    // 5. FLOATING HEARTS AND SPARKLING STARS
    // =========================================

    function createCelebrationEffect() {

        const symbols = [
            "❤️", "💕", "✨", "⭐", "💖", "🌟"
        ];

        const celebration = document.createElement("div");

        celebration.className = "celebration-particle";

        celebration.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        celebration.style.left = Math.random() * 100 + "vw";

        celebration.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        document.body.appendChild(celebration);

        window.setTimeout(function () {
            celebration.remove();
        }, 8000);
    }

    window.setInterval(createCelebrationEffect, 700);


    // =========================================
    // 6. FALLING GRADUATION CONFETTI
    // =========================================

    function createConfetti() {

        const confetti = document.createElement("div");

        confetti.className = "graduation-confetti";

        const colors = [
            "#ff4d6d",
            "#ffd700",
            "#8b5cf6",
            "#00d4ff",
            "#ff85a1",
            "#ffffff"
        ];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        window.setTimeout(function () {
            confetti.remove();
        }, 6000);
    }

    window.setInterval(createConfetti, 500);


    // =========================================
    // 7. SCROLL REVEAL ANIMATIONS
    // =========================================

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // =========================================
    // 8. PHOTO GALLERY
    // =========================================

    const galleryPhotos = Array.from(
        document.querySelectorAll(".photo-frame img")
    );

    const galleryLightbox =
        document.getElementById("galleryLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxCaption =
        document.getElementById("lightboxCaption");

    const photoCounter =
        document.getElementById("photoCounter");

    const closeButton =
        document.getElementById("closeGallery");

    const previousButton =
        document.getElementById("prevPhoto");

    const nextButton =
        document.getElementById("nextPhoto");

    let currentPhoto = 0;


    function showPhoto(index) {

        if (galleryPhotos.length === 0) return;

        currentPhoto =
            (index + galleryPhotos.length) % galleryPhotos.length;

        const photo = galleryPhotos[currentPhoto];

        lightboxImage.src = photo.src;
        lightboxImage.alt = photo.alt;

        lightboxCaption.textContent =
            photo.dataset.caption || photo.alt;

        photoCounter.textContent =
            `${currentPhoto + 1} / ${galleryPhotos.length}`;
    }


    function openGallery(index) {

        if (!galleryLightbox) return;

        showPhoto(index);

        if (!galleryLightbox.open) {
            galleryLightbox.showModal();
        }
    }


    function closeGallery() {

        if (galleryLightbox && galleryLightbox.open) {
            galleryLightbox.close();
        }
    }


    galleryPhotos.forEach(function (photo, index) {

        photo.addEventListener("click", function () {
            openGallery(index);
        });

        photo.addEventListener("keydown", function (event) {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                openGallery(index);
            }
        });

    });


    if (closeButton) {
        closeButton.addEventListener("click", closeGallery);
    }


    if (previousButton) {
        previousButton.addEventListener("click", function () {
            showPhoto(currentPhoto - 1);
        });
    }


    if (nextButton) {
        nextButton.addEventListener("click", function () {
            showPhoto(currentPhoto + 1);
        });
    }


    if (galleryLightbox) {

        galleryLightbox.addEventListener("click", function (event) {

            const bounds = galleryLightbox.getBoundingClientRect();

            const clickedOutside =
                event.clientX < bounds.left ||
                event.clientX > bounds.right ||
                event.clientY < bounds.top ||
                event.clientY > bounds.bottom;

            if (clickedOutside) {
                closeGallery();
            }

        });


        galleryLightbox.addEventListener("cancel", function (event) {

            event.preventDefault();

            closeGallery();

        });


        // KEYBOARD NAVIGATION

        galleryLightbox.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                event.preventDefault();

                closeGallery();

            }

            if (event.key === "ArrowLeft") {
                showPhoto(currentPhoto - 1);
            }

            if (event.key === "ArrowRight") {
                showPhoto(currentPhoto + 1);
            }

        });


        // MOBILE SWIPE NAVIGATION

        let touchStartX = 0;

        galleryLightbox.addEventListener("touchstart", function (event) {

            touchStartX = event.changedTouches[0].screenX;

        }, { passive: true });


        galleryLightbox.addEventListener("touchend", function (event) {

            const touchEndX = event.changedTouches[0].screenX;

            const difference = touchStartX - touchEndX;

            if (Math.abs(difference) < 50) return;

            if (difference > 0) {
                showPhoto(currentPhoto + 1);
            } else {
                showPhoto(currentPhoto - 1);
            }

        }, { passive: true });

    }

});
