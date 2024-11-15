// tech-background.js

// 创建一个canvas元素并添加到页面
const canvas = document.createElement('canvas');
canvas.id = 'tech-background';
document.body.appendChild(canvas);

// 获取canvas上下文
const ctx = canvas.getContext('2d');

// 设置canvas大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义一些初始化参数
const particleCount = 100;
const particleSize = 2;
const lineLength = 100;
const lineAlpha = 0.2;

// 粒子对象
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // 在边界处反弹
        if (this.x < 0 || this.x > canvas.width) {
            this.vx *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.vy *= -1;
        }
    }

    draw() {
        ctx.fillRect(this.x, this.y, particleSize, particleSize);
    }
}

// 粒子数组
const particles = [];

// 初始化粒子
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black'; // 设置背景颜色为黑色
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 更新并绘制粒子
    for (const particle of particles) {
        particle.update();
        particle.draw();
    }

    // 绘制粒子之间的连线
    ctx.beginPath();
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < lineLength) {
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
                ctx.stroke();
            }
        }
    }
    ctx.closePath();
}

// 开始动画
animate();