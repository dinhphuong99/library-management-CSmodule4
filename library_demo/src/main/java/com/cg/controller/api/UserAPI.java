package com.cg.controller.api;


import com.cg.model.User;
import com.cg.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserAPI {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getList() {

        List<User> users = userService.findAll();

        return users;
    }

    @GetMapping("/{id}")
    public User update(@PathVariable Long id) {

        User user = userService.findById(id).get();

        return user;
    }

    @PostMapping("/create")
    public User create(@RequestBody User user) {

        User userCreated = userService.save(user);

        return userCreated;
    }

    @PostMapping("/update")
    public User update(@RequestBody User user) {

        User userUpdated = userService.save(user);

        return userUpdated;
    }

    @DeleteMapping("/{id}")
    public User delete(@PathVariable Long id) {

        User user = userService.findById(id).get();

        return user;
    }
}
