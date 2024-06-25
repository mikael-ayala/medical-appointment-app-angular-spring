package com.project.medicalapp.controllers;

import com.project.medicalapp.dto.SpecialtyDTO;
import com.project.medicalapp.services.SpecialtyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/specialties")
@RequiredArgsConstructor
public class SpecialtyController {
    private final SpecialtyService specialtyService;

    @GetMapping
    public ResponseEntity<List<SpecialtyDTO>> findAll() {
        List<SpecialtyDTO> specialties = specialtyService.findAll();
        return ResponseEntity.ok(specialties);
    }
}
