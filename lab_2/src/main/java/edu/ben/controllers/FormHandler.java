package edu.ben.controllers;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

//@WebServlet(name = "FormHandler", value = "/FormHandler")
@WebServlet(urlPatterns = "/FormHandler")
public class FormHandler extends HttpServlet {

    public void doP(HttpServletRequest request, HttpServletResponse response) throws IOException {


        String firstName = request.getParameter("firstName");

        response.setContentType("text/html");

        // Hello
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>" + firstName + "</h1>");
        out.println("</body></html>");
    }

    public void destroy() {
    }
}