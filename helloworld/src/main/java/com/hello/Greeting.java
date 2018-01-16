package com.hello;

public class Greeting {
    private String message;
    private String name;

    public Greeting(String message, String name) {
        this.message = message;
        this.name = name;
    }


    public Greeting() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
