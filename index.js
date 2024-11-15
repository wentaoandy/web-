document.addEventListener('DOMContentLoaded', function() {
    // 创建星星背景
    function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        document.body.appendChild(starsContainer);

        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            starsContainer.appendChild(star);
        }
    }

    // 打字效果
    const text = "你好呀 web";
    const typedTextSpan = document.getElementById("typed-text");
    const startBtn = document.getElementById("start-btn");
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            typedTextSpan.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            // 文字打完后消失文本并显示按钮
            setTimeout(() => {
                typedTextSpan.textContent = ''; // 清空文本
                startBtn.style.display = "inline-block";
                startBtn.style.opacity = "0";
                setTimeout(() => {
                    startBtn.style.transition = "opacity 1s";
                    startBtn.style.opacity = "1";
                }, 100);
            }, 500);
        }
    }

    // 黑洞动画
    function startBlackHoleAnimation() {
        const blackHole = document.querySelector('.black-hole');
        const stars = document.querySelector('.stars');
        const btn = document.getElementById('start-btn');

        // 激活黑洞
        blackHole.style.opacity = '1';
        blackHole.classList.add('active');

        // 星星被吸入效果
        stars.classList.add('pulled');

        // 按钮旋转消失动画
        btn.style.animation = 'buttonPull 1s forwards';

        // 等待动画完成后跳转
        setTimeout(() => {
            window.location.href = 'page2.jsp';
        }, 1500);
    }

    // 绑定点击事件
    startBtn.addEventListener('click', startBlackHoleAnimation);

    // 初始化
    createStars();
    setTimeout(type, 1000);
});