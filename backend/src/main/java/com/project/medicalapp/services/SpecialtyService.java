package com.project.medicalapp.services;

import com.project.medicalapp.dto.SpecialtyDTO;
import com.project.medicalapp.entities.Specialty;
import com.project.medicalapp.repositories.SpecialtyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SpecialtyService {
    private final SpecialtyRepository specialtyRepository;

    @Transactional(readOnly = true)
    public List<SpecialtyDTO> findAll() {
        List<Specialty> specialties = specialtyRepository.findAll();
        return specialties.stream().map(SpecialtyDTO::new).toList();
    }
}
