package com.cg.controller.api;


import com.cg.model.Status;
import com.cg.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/states")
public class StatusAPI {
    @Autowired
    private StatusService statusService;

    @GetMapping
    public List<Status> getList() {

        List<Status> status = statusService.findAll();

        return status;
    }

    @GetMapping("/{id}")
    public Status update(@PathVariable Long id) {

        Status status = statusService.findById(id).get();

        return status;
    }

    @PostMapping("/create")
    public Status create(@RequestBody Status status) {

        Status statusCreated = statusService.save(status);

        return statusCreated;
    }

    @PostMapping("/update")
    public Status update(@RequestBody Status status) {

        Status statusUpdated = statusService.save(status);

        return statusUpdated;
    }

    @DeleteMapping("/{id}")
    public Status delete(@PathVariable Long id) {

        Status status = statusService.findById(id).get();

        return status;
    }
}