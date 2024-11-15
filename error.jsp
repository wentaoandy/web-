<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>错误页面</title>
</head>
<body>
<h1>错误处理页面</h1>
<p>抱歉，发生了一个错误：</p>
<p>错误信息: <%= request.getAttribute("errorMessage") %></p>
<p>请稍后重试或联系管理员。</p>

<form action="1.jsp" method="get">
    <button type="submit">返回到首页</button>
</form>

</body>
</html>
