document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        { id: 'html', delay: 0 },
        { id: 'head', delay: 500 },
        { id: 'title', delay: 1000 },
        { id: 'meta', delay: 1500 },
        { id: 'body', delay: 2000 },
        { id: 'h1', delay: 2500 },
        { id: 'div', delay: 3000 },
        { id: 'p', delay: 3500 },
        { id: 'a', delay: 4000 },
        { id: 'img', delay: 4500 },
        { id: 'ul', delay: 5000 },
        { id: 'li', delay: 5500 },
        { id: 'span', delay: 6000 },
    ];

    // 依次显示元素
    elements.forEach((element, index) => {
        setTimeout(() => {
            const el = document.getElementById(element.id);
            el.style.opacity = 1;
            el.style.transform = "translate(-50%, 0)";
        }, element.delay);
    });

    // 绘制连接线
    setTimeout(drawLines, 6500);
});

function drawLines() {
    const svg = document.querySelector(".line-svg");
    const connections = [
        ["html", "head"],
        ["html", "body"],
        ["head", "title"],
        ["head", "meta"],
        ["body", "h1"],
        ["body", "div"],
        ["div", "p"],
        ["div", "a"],
        ["div", "img"],
        ["body", "ul"],
        ["ul", "li"],
        ["div", "span"]
    ];

    connections.forEach(([parentId, childId]) => {
        const parentEl = document.getElementById(parentId);
        const childEl = document.getElementById(childId);

        const parentRect = parentEl.getBoundingClientRect();
        const childRect = childEl.getBoundingClientRect();

        const parentCenterX = parentRect.left + parentRect.width / 2;
        const parentCenterY = parentRect.top + parentRect.height / 2;
        const childCenterX = childRect.left + childRect.width / 2;
        const childCenterY = childRect.top + childRect.height / 2;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", parentCenterX);
        line.setAttribute("y1", parentCenterY);
        line.setAttribute("x2", childCenterX);
        line.setAttribute("y2", childCenterY);
        line.setAttribute("stroke", "#666");
        line.setAttribute("stroke-width", "2");
        line.setAttribute("opacity", "0");

        // 设置线条的显示动画
        svg.appendChild(line);
        setTimeout(() => {
            line.setAttribute("opacity", "1");
            line.style.transition = "opacity 0.5s ease";
        }, 100);
    });

    // 5秒后跳转到page2.jsp
    setTimeout(() => {
        window.location.href = "page2.jsp";
    }, 1000);
}
