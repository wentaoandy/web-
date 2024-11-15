// 创建星星
function createStars() {
    const stars = document.querySelector('.stars');
    const starCount = 300;

    for(let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // 随机大小(0.5-2像素)
        const size = Math.random() * 1.5 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        // 随机位置
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        // 随机动画延迟和持续时间
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';

        stars.appendChild(star);
    }
}

function createShatterPieces(bubble) {
    const rect = bubble.getBoundingClientRect();
    const pieces = 15;

    for(let i = 0; i < pieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'shatter-piece';

        const size = Math.random() * 30 + 10;
        piece.style.width = size + 'px';
        piece.style.height = size + 'px';

        piece.style.left = (rect.left + rect.width/2) + 'px';
        piece.style.top = (rect.top + rect.height/2) + 'px';

        const angle = (i / pieces) * 360;
        const distance = 150;
        const destinationX = Math.cos(angle * Math.PI / 180) * distance;
        const destinationY = Math.sin(angle * Math.PI / 180) * distance;

        piece.style.transition = 'all 0.8s ease-out';
        document.body.appendChild(piece);

        setTimeout(() => {
            piece.style.transform = `translate(${destinationX}px, ${destinationY}px) rotate(${Math.random() * 720}deg)`;
            piece.style.opacity = '0';
        }, 0);

        setTimeout(() => {
            piece.remove();
        }, 800);
    }
}

// function bubbleClick(bubble, destination) {
//     bubble.style.animation = 'shatter 0.8s forwards';
//     createShatterPieces(bubble);
//
//     setTimeout(() => {
//         window.location.href = destination;
//     }, 800);
// }
function bubbleClick(bubble, destination, attributeName) {
    bubble.style.animation = 'shatter 0.8s forwards';
    createShatterPieces(bubble);

    setTimeout(() => {
        // 创建AJAX请求
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "updateSession.jsp", true);  // 使用POST请求访问updateSession.jsp
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // 发送请求，传递点击的泡泡的属性名
        xhr.send("attribute=" + attributeName);

        // 当请求完成后跳转到目标页面
        xhr.onload = () => {
            if (xhr.status === 200) {
                // 请求成功，跳转到对应的页面
                window.location.href = destination;
            } else {
                console.error("Failed to update session state.");
            }
        };
    }, 800);  // 延迟800毫秒后执行跳转和状态更新
}



// 泡泡的小范围独立运动
document.querySelectorAll('.bubble').forEach((bubble, index) => {
    const radius = 16;
    const speed = 0.007;
    const centerX = bubble.offsetLeft;
    const centerY = bubble.offsetTop;
    let angle = (index / 4) * Math.PI * 2;

    function animate() {
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        bubble.style.transform = `translate(${x - centerX}px, ${y - centerY}px)`;

        angle += speed;
        requestAnimationFrame(animate);
    }

    animate();
});

// 初始化
createStars();