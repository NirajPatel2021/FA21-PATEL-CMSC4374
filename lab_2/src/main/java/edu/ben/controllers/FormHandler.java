package edu.ben.controllers;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.*;

public class FormHandler extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        
        String firstName = request.getParameter("firstName");

        RequestDispatcher rd = request.getRequestDispatcher("welcome.jsp");
        request.setAttribute("firstName", firstName);
        rd.forward(request, response);

        System.out.println("Welcome to the black parade " + firstName + "!");


    }
}