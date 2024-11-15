<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page session="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>命运十字路</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="page2.css">
</head>
<body>
<div class="galaxy"></div>
<div class="stars"></div>

<div class="bubble-container">
    <!-- 添加一个提示信息的div -->
    <div id="completion-message" style="display: none; color: white; text-align: center; font-size: 24px;">
        准备好了吗！下一站，拉夫德鲁!!!
    </div>

    <%
        Boolean htmlClicked = (Boolean) session.getAttribute("htmlClicked");
        Boolean cssClicked = (Boolean) session.getAttribute("cssClicked");
        Boolean jsClicked = (Boolean) session.getAttribute("jsClicked");
        Boolean jspClicked = (Boolean) session.getAttribute("jspClicked");

        if (htmlClicked == null) htmlClicked = false;
        if (cssClicked == null) cssClicked = false;
        if (jsClicked == null) jsClicked = false;
        if (jspClicked == null) jspClicked = false;

        if (!htmlClicked) { %>
    <div class="bubble" onclick="bubbleClick(this, 'html.html', 'htmlClicked')">HTML</div>
    <% }
        if (!cssClicked) { %>
    <div class="bubble" onclick="bubbleClick(this, 'css.html', 'cssClicked')">CSS</div>
    <% }
        if (!jsClicked) { %>
    <div class="bubble" onclick="bubbleClick(this, 'javascript.html', 'jsClicked')">JavaScript</div>
    <% }
        if (!jspClicked) { %>
    <div class="bubble" onclick="bubbleClick(this, 'jsp.html', 'jspClicked')">JSP</div>
    <% }

        if (htmlClicked && cssClicked && jsClicked && jspClicked) {
    %>
    <script>
        // 显示完成提示
        document.getElementById('completion-message').style.display = 'block';

        // 延迟3秒后重置并跳转
        setTimeout(() => {
            // 重置session状态
            fetch("resetSession.jsp", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(() => {
                // 跳转到主页
                window.location.href = "个人主页/index.html";
            });
        }, 1000);
    </script>
    <%
        }
    %>
</div>

<script src="page2.js"></script>
<script>
    function bubbleClick(bubble, destination, attributeName) {
        bubble.style.animation = 'shatter 0.8s forwards';
        createShatterPieces(bubble);

        setTimeout(() => {
            // 更新session状态
            fetch("updateSession.jsp", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'attribute=' + attributeName
            }).then(() => {
                // 跳转到目标页面
                window.location.href = destination;
            });
        }, 800);
    }
</script>
</body>
</html>