package com.project.medicalapp.dto;

import com.project.medicalapp.entities.Advertisement;

import java.util.Set;
import java.util.stream.Collectors;

public record AdvertisementDTO(Long id, String title, String description, Double price, UserDTO user, Set<SpecialtyDTO> specialties) {
    public AdvertisementDTO(Advertisement advertisement) {
        this(advertisement.getId(),
            advertisement.getTitle(),
            advertisement.getDescription(),
            advertisement.getPrice(),
            new UserDTO(advertisement.getUser()),
            advertisement.getSpecialties().stream().map(SpecialtyDTO::new).collect(Collectors.toSet()));
    }
}
