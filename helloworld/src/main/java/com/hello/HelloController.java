package com.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @RequestMapping("/greeting")
    public @ResponseBody Greeting index() {
        return new Greeting("Greetings from Spring Boot!", "Ted");
    }


    @RequestMapping("/testing.html")
    public String test() {
        return "testing";
    }

}