document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".transition-overlay");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const leaf = document.getElementById("leaf");
    let ww = window.innerWidth;
    let wh = window.innerHeight;
    canvas.width = ww;
    canvas.height = wh;
    let particles = [];

    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1 + 3;
        this.speedX = Math.random() * 3 - 2;
        this.speedY = Math.random() * 3 - 2;
        this.opacity = 1;
    }

    Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.02;
    };

    Particle.prototype.draw = function () {
        ctx.fillStyle = `rgba(224,255,255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        this.opacity -= 0.008;
    };

    function animate() {
        ctx.clearRect(0, 0, ww, wh);
        particles.forEach((p, index) => {
            p.update();
            p.draw();
            if (p.opacity <= 0) {
                particles.splice(index, 1);
            }
        });
        if (particles.length > 0) {
            requestAnimationFrame(animate);
        }
    }

    function triggerParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle(ww / 2, wh / 1.4));
        }
        animate();
    }

    function pageTransition() {
        overlay.classList.add("active");
        canvas.style.display = "block";
        triggerParticles();
        overlay.addEventListener("transitionend", function () {
            window.location.href = "index.html";
        });
    }

    leaf.addEventListener("click", function (e) {
        e.preventDefault();
        pageTransition();
    });
});