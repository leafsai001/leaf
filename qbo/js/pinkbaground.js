const canvas = document.getElementById("warpCanvas");
        const ctx = canvas.getContext("2d");
        let particles = [];
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speed = Math.random() * 2 + 0.5;
                this.angle = Math.random() * Math.PI * 2;
                this.life = Math.random() * 100 + 100;
                this.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`;
            }
            update() {
                // 重力效果：使粒子朝下移動
                this.y += this.speed * Math.sin(this.angle);
                this.x += this.speed * Math.cos(this.angle);
                this.size = Math.max(1, this.size * 0.98);  // 粒子逐漸縮小

                // 當粒子快要消失時，產生光暈效果
                if (this.life <= 0) {
                    this.reset();
                }
                this.life -= 1;

                // 顏色漸變：隨著時間的流逝，顏色變化
                this.color = `rgba(${Math.floor(255 - this.life / 2)}, ${Math.floor(255 - this.life / 4)}, 255, ${Math.random() * 0.8 + 0.2})`;

                // 邊界反彈：當粒子接觸邊緣時，彈回
                if (this.x < 0 || this.x > canvas.width) {
                    this.angle = Math.PI - this.angle;
                }
                if (this.y < 0 || this.y > canvas.height) {
                    this.angle = -this.angle;
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function createParticles() {
            for (let i = 0; i < 200; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        document.addEventListener("mousemove", (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        createParticles();
        animateParticles();