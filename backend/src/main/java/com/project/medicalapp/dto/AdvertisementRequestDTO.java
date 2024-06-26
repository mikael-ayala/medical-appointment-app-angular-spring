package com.project.medicalapp.dto;

import com.project.medicalapp.entities.Advertisement;

import java.util.Set;
import java.util.stream.Collectors;

public record AdvertisementRequestDTO(Long id, String title, String description, Double price, Set<SpecialtyDTO> specialties) {
    public AdvertisementRequestDTO(Advertisement advertisement) {
        this(advertisement.getId(),
            advertisement.getTitle(),
            advertisement.getDescription(),
            advertisement.getPrice(),
            advertisement.getSpecialties().stream().map(SpecialtyDTO::new).collect(Collectors.toSet()));
    }
}
