package com.cg.controller.api;

import com.cg.model.Position;
import com.cg.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/positions")
public class PositionAPI {

    private PositionService positionService;

    @GetMapping
    public List<Position> getList() {

        List<Position> positions = positionService.findAll();

        return positions;
    }

    @GetMapping("/{id}")
    public Position update(@PathVariable Long id) {

        Position position = positionService.findById(id).get();

        return position;
    }

    @PostMapping("/create")
    public Position create(@RequestBody Position position) {

        Position positionCreated = positionService.save(position);

        return positionCreated;
    }

    @PostMapping("/update")
    public Position update(@RequestBody Position position) {

        Position positionUpdated = positionService.save(position);

        return positionUpdated;
    }

    @DeleteMapping("/{id}")
    public Position delete(@PathVariable Long id) {

        Position position = positionService.findById(id).get();

        return position;
    }
}