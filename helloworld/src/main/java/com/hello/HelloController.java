package com.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @RequestMapping("/greeting")
    public Greeting index(@RequestParam(value = "name", defaultValue = "Ted") String name) {
        return new Greeting("Greetings from Spring Boot!", name);
    }

    @RequestMapping("/testing.html")
    public String test() {
        return "testing";
    }

}