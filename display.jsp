<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
  <title>JSP 内置对象示例</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      width: 50%;
      margin: auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  </style>
</head>
<body>
<div class="container">
  <h2>使用 JSP 内置对象示例</h2>
  <form method="post" action="result.jsp">
    <label for="name">请输入您的姓名：</label>
    <input type="text" id="name" name="name" required>
    <br><br>
    <input type="submit" value="提交">
  </form>
  <button onclick="window.location.href='page2.jsp'">跳转到 page2.jsp</button>

  <h3>内置对象使用示例</h3>
  <ul>
    <!-- 1. request对象 -->
    <li>请求方法：<%= request.getMethod() %></li>

    <!-- 2. response对象 -->
    <%
      response.setContentType("text/html;charset=UTF-8");
      response.setHeader("Custom-Header", "JSPExample");
    %>
    <li>响应的自定义头部信息已设置。</li>

    <!-- 3. out对象 -->
    <li>输出时间：<%= new Date() %></li>

    <!-- 4. session对象 -->
    <%
      session.setAttribute("username", request.getParameter("name"));
      String sessionName = (String) session.getAttribute("username");
    %>
    <li>Session中的用户名：<%= (sessionName != null ? sessionName : "未输入") %></li>

    <!-- 5. application对象 -->
    <%
      application.setAttribute("appName", "JSP内置对象示例");
    %>
    <li>Application全局属性：<%= application.getAttribute("appName") %></li>

    <!-- 6. config对象 -->
    <li>Servlet 配置名称：<%= config.getServletName() %></li>

    <!-- 7. pageContext对象 -->
    <li>PageContext 获取的路径：<%= pageContext.getServletContext().getRealPath("/") %></li>

    <!-- 8. page对象 (指当前 JSP 页面对象本身) -->
    <li>Page对象类名：<%= this.getClass().getName() %></li>

    <!-- 9. exception对象 -->
    <%
      try {
        int result = 10 / 0;  // 故意引发异常
      } catch (Exception e) {
        exception = e;
      }
    %>
    <li>异常对象（捕获的异常）：<%= exception != null ? exception.getMessage() : "无异常" %></li>
  </ul>
</div>
</body>
</html>
