<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JSP九大内置对象演示</title>
  <style>
    .object-demo {
      margin: 20px;
      padding: 10px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
<h1>JSP九大内置对象功能演示</h1>
<div class="object-demo">
  <h3>1. application对象</h3>
  <%
    // 获取当前访问计数
    Integer visitorCount = (Integer) application.getAttribute("visitorCount");
    if (visitorCount == null) {
      visitorCount = 1;
    } else {
      visitorCount += 1;
    }
    application.setAttribute("visitorCount", visitorCount);
    out.println("访问计数: " + visitorCount + "<br>");
  %>

  <%-- 判断访问计数是否为2，是则5秒后跳转 --%>
  <%
    if (visitorCount == 2) {
  %>
  <script>
    setTimeout(function() {
      window.location.href = 'page2.jsp';
    }, 3000); // 延时5秒
  </script>
  <p>访问计数达到2，将在3秒后跳转到命运。</p>
  <%
    }else if (visitorCount > 2) {
  %>
  <script>
    setTimeout(function() {
      window.location.href = '张文涛的主页/index.html';
    }, 3000); // 延时5秒
  </script>
  <p>回到主页吧</p>
  <%
    }
  %>
</div>
<div class="object-demo">
  <h3>2. request对象</h3>
  <%
    out.println("请求方式: " + request.getMethod() + "<br>");
    out.println("客户端IP: " + request.getRemoteAddr() + "<br>");
    out.println("请求URI: " + request.getRequestURI() + "<br>");
  %>
</div>

<div class="object-demo">
  <h3>3. response对象</h3>
  <%
    response.setContentType("text/html;charset=UTF-8");
    out.println("已设置响应内容类型为text/html<br>");
  %>
</div>

<div class="object-demo">
  <h3>4. session对象</h3>
  <%
    session.setAttribute("username", "测试用户");
    out.println("Session ID: " + session.getId() + "<br>");
    out.println("用户名: " + session.getAttribute("username") + "<br>");
  %>
</div>

<div class="object-demo">
  <h3>5. out对象</h3>
  <%
    out.println("这是使用out对象输出的内容<br>");
    out.println("缓冲区大小: " + out.getBufferSize() + "字节<br>");
  %>
</div>

<div class="object-demo">
  <h3>6. pageContext对象</h3>
  <%
    pageContext.setAttribute("pageAttr", "页面属性值");
    out.println("页面属性: " + pageContext.getAttribute("pageAttr") + "<br>");
    out.println("请求URI(通过pageContext): " + ((HttpServletRequest) pageContext.getRequest()).getRequestURI() + "<br>");
  %>
</div>

<div class="object-demo">
  <h3>7. config对象</h3>
  <%
    out.println("Servlet名称: " + config.getServletName() + "<br>");
  %>
</div>

<div class="object-demo">
  <h3>8. page对象</h3>
  <%
    out.println("page对象的类名: " + page.getClass().getName() + "<br>");
  %>
</div>

<div class="object-demo">
  <h3>9. exception对象</h3>
  <p>点击以下按钮查看异常处理演示：</p>
  <form action="exception.jsp" method="get">
    <button type="submit">查看 exception 对象演示</button>
  </form>
</div>

</body>
</html>
