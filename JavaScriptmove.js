// 配置对象：包含方块的下降速度、反弹系数和颜色
const config = {
    fallSpeed: 1,
    bounceRate: 0.06,
    blockColor: '#00ff00'
};

// 事件绑定：更新配置项
document.getElementById('fallSpeed').addEventListener('input', (e) => {
    config.fallSpeed = parseFloat(e.target.value);
});

document.getElementById('bounceRate').addEventListener('input', (e) => {
    config.bounceRate = parseFloat(e.target.value);
});

document.getElementById('blockColor').addEventListener('input', (e) => {
    config.blockColor = e.target.value;
});

// 按钮点击事件，跳转到新的页面
const button = document.querySelector('.btn-12');
button.addEventListener('click', () => {
    window.location.href = 'page2.jsp';
});

// 定义 Block 类：负责创建和管理每个方块的行为
class Block {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = 15 + Math.random() * 10;  // 随机大小
        this.color = color;
        this.velocity = {
            x: 0,
            y: config.fallSpeed + Math.random() * 0.5
        };
        this.element = this.createElement();  // 创建DOM元素
        this.landed = false;  // 是否已经落地
        this.updatePosition();
    }

    // 创建方块的DOM元素
    createElement() {
        const element = document.createElement('div');
        element.className = 'block';
        element.style.width = `${this.size}px`;
        element.style.height = `${this.size}px`;
        element.style.color = this.color;
        element.style.borderColor = this.color;
        document.body.appendChild(element);
        return element;
    }

    // 更新方块的位置
    updatePosition() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    // 更新方块的状态，包括落地和反弹
    update() {
        if (this.landed) return;

        this.y += this.velocity.y;  // 向下移动

        if (this.y + this.size >= window.innerHeight) {  // 触碰地面
            this.y = window.innerHeight - this.size;
            this.velocity.y *= -config.bounceRate;  // 反弹

            if (Math.abs(this.velocity.y) < 0.4) {  // 判断是否停留
                this.landed = true;
                this.element.style.transition = 'opacity 0.5s';
                this.element.style.opacity = '0';
                setTimeout(() => {
                    this.element.remove();  // 删除DOM元素
                }, 500);
            }
        } else {
            this.velocity.y += 0.1;  // 重力加速度
        }

        this.updatePosition();
    }
}

// 管理多个方块的数组
const blocks = [];

// 创建方块并定期生成新的方块
function createBlock() {
    const x = Math.random() * (window.innerWidth - 20);
    const block = new Block(x, -30, config.blockColor);  // 创建新的方块
    blocks.push(block);

    setTimeout(createBlock, 100 + Math.random() * 100);  // 定时生成
}

// 更新每个方块的位置
function updateBlocks() {
    blocks.forEach((block) => block.update());
    requestAnimationFrame(updateBlocks);  // 循环更新
}

// 初始化方块生成和更新
createBlock();
updateBlocks();
