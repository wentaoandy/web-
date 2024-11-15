<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>异常处理演示</title>
</head>
<body>
<h1>异常处理演示页面</h1>

<%
  try {
    int result = 1 / 0; // 故意制造一个异常
  } catch (Exception e) {
    // 将异常信息存入 request，并重定向到错误页面
    request.setAttribute("errorMessage", e.getMessage());
    response.sendRedirect("error.jsp");
  }
%>

</body>
</html>
