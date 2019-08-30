package com.example.demo;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
@Component
public class SImpleCORSFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest requestToUse=(HttpServletRequest)request;
        HttpServletResponse responseToUse=(HttpServletResponse)response;
        //responseToUse.setHeader("Access-Control-Allow-Origin", requestToUse.getHeader("Origin"));
        responseToUse.setHeader("Access-Control-Allow-Origin","*");
        responseToUse.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        responseToUse.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth, value");
        chain.doFilter(requestToUse, responseToUse);
    }
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
            Filter.super.init(filterConfig);
            System.out.println("CORS Filter initialized...");;
    }
}