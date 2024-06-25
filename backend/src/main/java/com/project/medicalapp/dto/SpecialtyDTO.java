package com.project.medicalapp.dto;

import com.project.medicalapp.entities.Specialty;

public record SpecialtyDTO (Long id, String name) {
    public SpecialtyDTO(Specialty specialty) {
        this(specialty.getId(), specialty.getName());
    }
}
