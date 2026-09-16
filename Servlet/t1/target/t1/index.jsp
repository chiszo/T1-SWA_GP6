<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Servlet 3+ / JSP Starter</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
<main>
    <h1>It works! 🎉</h1>
    <p>This is the default landing page, served straight from <code>webapp/index.jsp</code>.</p>
    <p>Now try the example servlet, which forwards to a JSP hidden under <code>/WEB-INF</code>:</p>
    <p><a href="${pageContext.request.contextPath}/hello?name=Estudiante">/hello?name=Estudiante</a></p>
</main>
</body>
</html>
