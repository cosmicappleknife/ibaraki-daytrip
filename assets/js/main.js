document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".fade").forEach(el => {
        observer.observe(el);
    });

});

const activeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        const marker = entry.target.querySelector(".marker");

        if (!marker) return;

        if (entry.isIntersecting) {
            marker.classList.add("active");
        } else {
            marker.classList.remove("active");
        }

    });

}, {
    threshold: 0.5
});

document.querySelectorAll(".timeline-item").forEach(item => {
    activeObserver.observe(item);
});
