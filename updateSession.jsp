<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <%@ page session="true" %>
    <%
    String attribute = request.getParameter("attribute");
if (attribute != null) {
    session.setAttribute(attribute, true);
}
%>
