document.addEventListener("DOMContentLoaded", () => {
    const demo = document.getElementById('demo');
    const container = document.querySelector('.container');

    // 所有按钮配置（包括Reset和Jump），交换Reset和display的位置
    const buttons = [
        { text: 'display', type: 'property-button' },
        { text: '重置', type: 'reset-button' },
        { text: 'float', type: 'property-button' },
        { text: 'width', type: 'property-button' },
        { text: 'margin', type: 'property-button' },
        { text: 'border', type: 'property-button' },
        { text: 'position', type: 'property-button' },
        { text: 'text-align', type: 'property-button' },
        { text: 'background-color', type: 'property-button' },
        { text: '回到命运', type: 'jump-button' }
    ];

    const chineseDescriptions = {
        display: '显示方式',
        width: '宽度',
        margin: '外边距',
        border: '边框',
        'text-align': '文本对齐',
        position: '定位',
        float: '浮动',
        'background-color': '背景颜色',
    };

    const sentences = [
        "重新开始会让你很爽吗？",
        "你就这么享受这过程？真是够了……",
        "这次是哪里不合适了？",
        "好啊，归零，我都快要习惯这种循环了。",
        "真是没完没了，难道就不能一次顺利到底吗？",
        "又来了，你以为回去不累啊？",
        "少年你玩了！",
        "回到原点，你难道觉得我不累吗？",
        "这样反复，真的不会厌烦吗？",
        "还要来几次才能满意啊？"
        // ... 添加更多句子
    ];



    // 计算按钮位置
    function getButtonPosition(index, total) {
        const radius = 330; // 圆形半径
        const angle = ((index * ((2 * Math.PI) / total)) - Math.PI / 2);
        return {
            left: Math.cos(angle) * radius,
            top: Math.sin(angle) * radius
        };
    }

    // 创建所有按钮
    buttons.forEach((buttonConfig, index) => {
        const button = document.createElement('button');
        button.className = `button ${buttonConfig.type}`;
        button.textContent = buttonConfig.text;

        const position = getButtonPosition(index, buttons.length);
        button.style.left = `calc(50% + ${position.left}px)`;
        button.style.top = `calc(50% + ${position.top}px)`;

        // 添加点击效果
        if (buttonConfig.type === 'reset-button') {
            button.addEventListener('click', () => {
                const randomIndex = Math.floor(Math.random() * sentences.length);
                demo.textContent = sentences[randomIndex];
                demo.style = '';
            });
        } else if (buttonConfig.type === 'property-button') {
            button.addEventListener('click', () => {
                applyEffect(buttonConfig.text);
            });
        } else if (buttonConfig.type === 'jump-button') {
            button.addEventListener('click', () => {
                window.location.href = 'page2.jsp';
            });
        }

        container.appendChild(button);
    });

    // CSS效果对象
    const demoEffects = {
        display: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
        width: { width: '250px', height: '150px' },
        margin: { margin: '20px' },
        border: { border: '5px dashed #4a90e2' },
        'text-align': { textAlign: 'right' },
        position: { position: 'relative', top: '20px', left: '20px' },
        float: { float: 'right' },
        'background-color': { backgroundColor: '#2ecc71' }
    };

    // 应用效果函数
    function applyEffect(property) {
        if (demoEffects[property]) {
            Object.assign(demo.style, demoEffects[property]);
            demo.textContent = `${chineseDescriptions[property]} 效果演示`;
        }
    }
});
