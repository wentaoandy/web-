const text = `
    HTML 发展与主要标签

    HTML（HyperText Markup Language）起源于1991年，由蒂姆·伯纳斯·李（Tim Berners-Lee）在CERN发明。
    它是一种标准标记语言，用于创建网页。HTML通过标签来标识不同的内容结构。

    主要标签：
    <!DOCTYPE html> - 定义文档类型
    <html> - HTML文档的根元素
    <head> - 包含元数据（meta），如标题、编码等
    <title> - 定义网页标题
    <body> - 包含网页的内容
    <h1> - <h6> - 定义标题，h1是最大的标题，h6是最小的
    <p> - 定义段落
    <a> - 创建超链接
    <img> - 插入图像
    <ul> / <ol> - 定义无序/有序列表
    <li> - 列表项
    <div> - 定义文档中的一个块
    <span> - 定义文档中的一个内联部分

    这些标签构成了网页的基本结构和内容展示，是任何网页开发者都需要掌握的基础知识。
    接下来你将看到在浏览器中这些标签组成的DOM树
`;

const text1 = `
    <h2>HTML 发展与主要标签</h2>
    <p>HTML（HyperText Markup Language）起源于1991年，由蒂姆·伯纳斯·李（Tim Berners-Lee）在CERN发明。
    它是一种标准标记语言，用于创建网页。HTML通过标签来标识不同的内容结构。</p>
    <h3>主要标签：</h3>
    <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> - 定义文档类型</li>
        <li><code>&lt;html&gt;</code> - HTML文档的根元素</li>
        <li><code>&lt;head&gt;</code> - 包含元数据（meta），如标题、编码等</li>
        <li><code>&lt;title&gt;</code> - 定义网页标题</li>
        <li><code>&lt;body&gt;</code> - 包含网页的内容</li>
        <li><code>&lt;h1&gt; - &lt;h6&gt;</code> - 定义标题，h1是最大的标题，h6是最小的</li>
        <li><code>&lt;p&gt;</code> - 定义段落</li>
        <li><code>&lt;a&gt;</code> - 创建超链接</li>
        <li><code>&lt;img&gt;</code> - 插入图像</li>
        <li><code>&lt;ul&gt;</code> / <code>&lt;ol&gt;</code> - 定义无序/有序列表</li>
        <li><code>&lt;li&gt;</code> - 列表项</li>
        <li><code>&lt;div&gt;</code> - 定义文档中的一个块</li>
        <li><code>&lt;span&gt;</code> - 定义文档中的一个内联部分</li>
    </ul><p>这些标签构成了网页的基本结构和内容展示，是任何网页开发者都需要掌握的基础知识。</p>
    <p>你将看到一颗DOM树</p>
`;

let index = 0;
const textContainer = document.getElementById('text-container');
const clickTextContainer = document.getElementById('click-text-container');
const cursor = document.createElement('div');
cursor.classList.add('cursor');

// 初始化时将光标添加到打字容器
textContainer.appendChild(cursor);
let isTyping = false;
let hasClicked = false;

function createNumberElements(number) {
    const segment = document.querySelector('.countdown-segment');
    segment.innerHTML = '';

    if (number === 1) {
        segment.innerHTML = '<div class="vertical-line"></div>';
        segment.className = 'countdown-segment number-1';
    } else if (number === 2) {
        segment.innerHTML = `
            <div class="horizontal-line top-line"></div>
            <div class="horizontal-line middle-line"></div>
            <div class="horizontal-line bottom-line"></div>
            <div class="vertical-line top-vertical"></div>
            <div class="vertical-line bottom-vertical"></div>`;
        segment.className = 'countdown-segment number-2';
    } else if (number === 3) {
        segment.innerHTML = `
            <div class="horizontal-line top-line"></div>
            <div class="horizontal-line middle-line"></div>
            <div class="horizontal-line bottom-line"></div>
            <div class="vertical-line"></div>`;
        segment.className = 'countdown-segment number-3';
    }
}

function startCountdown() {
    let countdown = 3;
    createNumberElements(countdown);
    const interval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            createNumberElements(countdown);
        } else {
            clearInterval(interval);
            document.getElementById('countdown').style.display = 'none';
            startTyping();
        }
    }, 1000);
    document.getElementById('countdown').style.display = 'block';
}

function startTyping() {
    textContainer.style.display = 'block';
    isTyping = true;
    type();
}

function showFormattedText() {
    // 隐藏打字效果容器
    textContainer.style.display = 'none';

    // 显示格式化文本容器
    clickTextContainer.style.display = 'block';
    clickTextContainer.innerHTML = text1;

    // 在格式化文本后添加光标
    clickTextContainer.appendChild(cursor);

    // 滚动到顶部
    clickTextContainer.scrollTop = 0;

    // 设置延时跳转
    setTimeout(() => {
        window.location.href = 'dom.html';
    }, 3000);
}

function type() {
    if (index < text.length && isTyping && !hasClicked) {
        const char = document.createTextNode(text.charAt(index));
        textContainer.insertBefore(char, cursor);
        index++;
        setTimeout(type, 100);
    }
    else if (index === text.length && !hasClicked) {
        setTimeout(() => {
            window.location.href = 'dom.html';
        }, 3000);
    }
}

// 点击事件处理
document.body.addEventListener('click', () => {
    if (isTyping && !hasClicked) {
        hasClicked = true;
        showFormattedText();
    }
});