package com.cg.service;

import com.cg.model.Position;
import com.cg.model.Role;
import com.cg.repository.PositionRepository;
import com.cg.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PositionServiceImpl implements PositionService{
    @Autowired
    private PositionRepository positionRepository;

    @Override
    public List<Position> findAll() {
        return positionRepository.findAll();
    }

    @Override
    public Optional<Position> findById(Long id) {
        return positionRepository.findById(id);
    }

    @Override
    public Position save(Position position) {
        return positionRepository.save(position);
    }

    @Override
    public void remove(Long id) {
        positionRepository.deleteById(id);
    }
}
