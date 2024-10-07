class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
}

    animateLinks() {
    this.navLinks.forEach((link, index) => {
    link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
        }s`);
    });
}

handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
}

addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
}

init() {
    if (this.mobileMenu) {
    this.addClickEvent();
    }
    return this;
}
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

const track = document.getElementById("image-track");

let isMouseOverTrack = false;
let isMouseDown = false;

const animateOnLoad = () => {
    const images = track.getElementsByClassName("image");
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
        images[i].style.transform = 'translateY(20px)';

        setTimeout(() => {
            images[i].animate([
                { opacity: 0, transform: 'translateY(20px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], {
                duration: 900,
                fill: 'forwards'
            });
        }, i * 200);
    }
};

const handleOnDown = e => {
    isMouseDown = true;
    track.dataset.mouseDownAt = e.clientX;
};

const handleOnUp = () => {
    isMouseDown = false;
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = e => {
    if (!isMouseDown || track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 4;

    const percentage = (mouseDelta / maxDelta) * -63,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -63);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
};

const handleScroll = e => {
    const delta = e.deltaY;
    const maxDelta = window.innerWidth / 3;

    const percentage = (delta / maxDelta) * 63;
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -63);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }

    track.dataset.prevPercentage = nextPercentage;
}

track.onmouseenter = () => {
    isMouseOverTrack = true;
};

track.onmouseleave = () => {
    isMouseOverTrack = false;
    isMouseDown = false;
};

track.onmousedown = e => {
    if (isMouseOverTrack) handleOnDown(e);
};
track.ontouchstart = e => {
    if (isMouseOverTrack) handleOnDown(e.touches[0]);
};
track.onmouseup = () => {
    if (isMouseOverTrack) handleOnUp();
};
track.ontouchend = () => {
    if (isMouseOverTrack) handleOnUp();
};
track.onmousemove = e => {
    if (isMouseOverTrack) handleOnMove(e);
};
track.ontouchmove = e => {
    if (isMouseOverTrack) handleOnMove(e.touches[0]);
};
track.onwheel = e => {
    if (isMouseOverTrack) handleScroll(e);
};

window.onload = animateOnLoad;
