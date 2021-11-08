package com.cg.controller.api;

import com.cg.model.Role;
import com.cg.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RoleAPI {

    private RoleService roleService;

    @GetMapping
    public List<Role> getList() {

        List<Role> roles = roleService.findAll();

        return roles;
    }

    @GetMapping("/{id}")
    public Role update(@PathVariable Long id) {

        Role role = roleService.findById(id).get();

        return role;
    }

    @PostMapping("/create")
    public Role create(@RequestBody Role role) {

        Role roleCreated = roleService.save(role);

        return roleCreated;
    }

    @PostMapping("/update")
    public Role update(@RequestBody Role role) {

        Role roleUpdated = roleService.save(role);

        return roleUpdated;
    }

    @DeleteMapping("/{id}")
    public Role delete(@PathVariable Long id) {

        Role role = roleService.findById(id).get();

        return role;
    }
}