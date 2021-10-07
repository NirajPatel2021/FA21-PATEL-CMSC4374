package edu.ben.controllers;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.*;


@WebServlet(name = "FormHandler", value = "/FormHandler")
//@WebServlet(urlPatterns = "/FormHandler")
public class FormHandler extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello World!";
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {


        String firstName = request.getParameter("firstName");

        response.setContentType("text/html");
        RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
        rd.forward(request, response);

      System.out.println(firstName);



    }
}