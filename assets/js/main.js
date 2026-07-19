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

const items = document.querySelectorAll(".timeline-item");

function updateActiveMarker(){

    const center = window.innerHeight / 2;

    let closestItem = null;
    let closestDistance = Infinity;

    items.forEach(item=>{

        const rect = item.getBoundingClientRect();

        const itemCenter = rect.top + rect.height / 2;

        const distance = Math.abs(center - itemCenter);

        if(distance < closestDistance){

            closestDistance = distance;
            closestItem = item;

        }

    });

    document.querySelectorAll(".time").forEach(time=>{
        time.classList.remove("active");
    });

    if(closestItem){

        const time = closestItem.querySelector(".time");

        if(time){
            time.classList.add("active");
        }

    }

}

window.addEventListener("scroll", updateActiveMarker);

window.addEventListener("resize", updateActiveMarker);

updateActiveMarker();
