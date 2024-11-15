const text = ` 
                JavaScript 发展历史与主要功能

    JavaScript 是一种轻量级、解释型的编程语言，由 Brendan Eich 在 1995 年为 Netscape 浏览器设计。
    最初，JavaScript 被称为 Mocha，
    后来改为 LiveScript，最后在 Netscape 和 Sun Microsystems 的合作下
    更名为 JavaScript，以利用当时 Java 的流行。

    主要功能：
    1. 动态 HTML 操作：JavaScript 允许实时操作 HTML 文档，例如 DOM 操作，能使网页更具互动性。
    2. 事件处理：可处理用户的各种操作事件，比如点击、鼠标悬停等。
    3. 异步编程：通过 AJAX 和 Fetch，JavaScript 可以在后台加载数据，避免页面刷新。
    4. 浏览器 API 集成：允许开发者调用浏览器提供的 API，如地理定位、摄像头访问、Web Storage 等。
    5. 跨平台运行：JavaScript 可在多种环境中执行，从浏览器到服务器（如 Node.js）。

    JavaScript 已成为前端开发的核心语言，并扩展至后端，形成了一个庞大的生态系统。

    下落函数：
    update() 
    放置函数：
    this.updatePosition();
    方块生成函数：
    animate() 
    你准备好尝试了吗
`;

const text1 = `
    <h2>JavaScript 发展历史与主要功能</h2>
    <p>JavaScript 是一种轻量级、解释型的编程语言，由 Brendan Eich 在 1995 年为 Netscape 浏览器设计。最初，JavaScript 被称为 Mocha，后来改为 LiveScript，最后在 Netscape 和 Sun Microsystems 的合作下更名为 JavaScript，以利用当时 Java 的流行。</p>
    <h3>主要功能：</h3>
    <ul>
        <li><code>动态 HTML 操作</code>：JavaScript 允许实时操作 HTML 文档，例如 DOM 操作，能使网页更具互动性。</li>
        <li><code>事件处理</code>：可处理用户的各种操作事件，比如点击、鼠标悬停等。</li>
        <li><code>异步编程</code>：通过 AJAX 和 Fetch，JavaScript 可以在后台加载数据，避免页面刷新。</li>
        <li><code>浏览器 API 集成</code>：允许开发者调用浏览器提供的 API，如地理定位、摄像头访问、Web Storage 等。</li>
        <li><code>跨平台运行</code>：JavaScript 可在多种环境中执行，从浏览器到服务器（如 Node.js）。</li>
    </ul>
    <p>JavaScript 已成为前端开发的核心语言，并扩展至后端，形成了一个庞大的生态系统。</p>
    <p>下面时功能函数，一定要等到最后有惊喜哦</p>

    <h3>下落动画示例：</h3>
    <pre>
        <code>
            update() { 
                if (this.landed) return;

                this.y += this.velocity.y;

                if (this.y + this.size >= window.innerHeight) {
                    this.y = window.innerHeight - this.size;
                    this.velocity.y *= -config.bounceRate;

                    if (Math.abs(this.velocity.y) < 0.4) {
                        this.landed = true;
                        this.element.style.transition = 'opacity 0.5s';
                        this.element.style.opacity = '0';
                        setTimeout(() => {
                            this.element.remove();
                        }, 500);
                    }
                } else {
                    this.velocity.y += 0.1;
                }

                this.updatePosition();
            }

            function createBlock() {
                const x = Math.random() * (window.innerWidth - 20);
                const block = new Block(x, -30, config.blockColor);
                blocks.push(block);

                for (let i = blocks.length - 1; i >= 0; i--) {
                    if (blocks[i].landed) {
                        blocks.splice(i, 1);
                    }
                }
            }

            setInterval(createBlock, 50);

            function animate() {
                blocks.forEach(block => block.update());
                requestAnimationFrame(animate);
            }

            animate();
        </code>
    </pre>
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
        window.location.href = 'JavaScriptmove.html';
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
            window.location.href = 'JavaScriptmove.html';
        }, 3000);
    }
}

document.body.addEventListener('click', () => {
    if (isTyping && !hasClicked) {
        hasClicked = true;
        showFormattedText();
    }
});