<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    // 重置所有session状态
    session.setAttribute("htmlClicked", false);
    session.setAttribute("cssClicked", false);
    session.setAttribute("jsClicked", false);
    session.setAttribute("jspClicked", false);
%>