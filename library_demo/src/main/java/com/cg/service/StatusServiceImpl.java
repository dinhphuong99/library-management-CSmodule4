package com.cg.service;

import com.cg.model.Status;
import com.cg.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class StatusServiceImpl implements StatusService{
    @Autowired
    private StatusRepository statusRepository;

    @Override
    public List<Status> findAll() {
        return statusRepository.findAll();
    }

    @Override
    public Optional<Status> findById(Long id) {
        return statusRepository.findById(id);
    }

    @Override
    public Status save(Status status) {
        return statusRepository.save(status);
    }

    @Override
    public void remove(Long id) {
        statusRepository.deleteById(id);
    }
}
