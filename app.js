const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 133;

const currentFrame = (index) => `./Compressed/${(index + 1).toString()}.png`;
const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

gsap.to(ball, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: true,
        pin: "canvas",
        end: "750%",
    },
    onUpdate: render,
})

gsap.fromTo(".description", { opacity: 0.1,}, {
    opacity: 1,
    scrollTrigger: {
        scrub: true,
        start: '15%',
        end: '45%',
    },
    onComplete: () => {
        gsap.to(".description", {
            opacity: 0,
        });
    }
});
gsap.fromTo(".description", {x: -2000, }, {
    x: "-5%",
    scrollTrigger: {
        scrub: true,
        start: '0%',
        end: '45%',
    },
    onComplete: () => {
        gsap.to(".description", {
            x: -2000
        });
    }
});

gsap.fromTo(".description2", { opacity: 0.1, }, {
    opacity: 1, scrollTrigger: {
        scrub: true,
        start: '60%',
        end: '80%',
    },
    onComplete: () => {
        gsap.to(".description2", { opacity: 0.1, });
    }
});
gsap.fromTo(".description2", { x: -2000, }, {
    x: "-5%",
    scrollTrigger: {
        scrub: true,
        start: '45%',
        end: '80%',
    },
    onComplete: () => {
        gsap.to(".description2", {
            x: -2000
        });
    }
});

images[0].onload = render;

function render() {

    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);
}