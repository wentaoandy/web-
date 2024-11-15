const text = `
        CSS 发展与主要选择器

    CSS（Cascading Style Sheets）是一种用于描述HTML文档的展示样式的样式表语言。
    它由Håkon Wium Lie和Bert Bos在1994年发明。

    主要选择器：
    1. 元素选择器：直接选取HTML元素，例如p, h1。
    2. 类选择器：以.开头，用于选取拥有特定类属性的元素，例如.classname。
    3. ID选择器：以#开头，用于选取拥有特定ID属性的元素，例如#idname。
    4. 后代选择器：选取某元素内部的所有指定元素，例如div p。
    5. 子选择器：选取某元素的直接子元素，例如ul > li。
    6. 伪类选择器：用于选择元素的某个状态，例如:hover, :nth-child()。

    这些选择器帮助我们精确地定义样式，使网页更加美观和可维护。
`;

const text1 = `
    <h2>CSS 发展与主要选择器</h2>
    <p>CSS（Cascading Style Sheets）是一种用于描述HTML文档的展示样式的样式表语言。它由Håkon Wium Lie和Bert Bos在1994年发明。</p>
    <h3>主要选择器：</h3>
    <ul>
        <li><code>元素选择器</code>：直接选取HTML元素，例如<code>p</code>, <code>h1</code>。</li>
        <li><code>类选择器</code>：以<code>.</code>开头，用于选取拥有特定类属性的元素，例如<code>.classname</code>。</li>
        <li><code>ID选择器</code>：以<code>#</code>开头，用于选取拥有特定ID属性的元素，例如<code>#idname</code>。</li>
        <li><code>后代选择器</code>：选取某元素内部的所有指定元素，例如<code>div p</code>。</li>
        <li><code>子选择器</code>：选取某元素的直接子元素，例如<code>ul &gt; li</code>。</li>
        <li><code>伪类选择器</code>：用于选择元素的某个状态，例如<code>:hover</code>, <code>:nth-child()</code>。</li>
    </ul>
    <p>这些选择器帮助我们精确地定义样式，使网页更加美观和可维护。</p>
`;

let index = 0;
const textContainer = document.getElementById('text-container');
const clickTextContainer = document.getElementById('click-text-container');
const cursor = document.createElement('div');
cursor.classList.add('cursor');

textContainer.appendChild(cursor);
let isTyping = false;
let hasClicked = false;

function startTyping() {
    textContainer.style.display = 'block';
    isTyping = true;
    type();
}

function showFormattedText() {
    textContainer.style.display = 'none';
    clickTextContainer.style.display = 'block';
    clickTextContainer.innerHTML = text1;
    clickTextContainer.appendChild(cursor);
    clickTextContainer.scrollTop = 0;
    setTimeout(() => {
        window.location.href = 'move.html';
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
            window.location.href = 'move.html';
        }, 3000);
    }
}

document.body.addEventListener('click', () => {
    if (isTyping && !hasClicked) {
        hasClicked = true;
        showFormattedText();
    }
});
