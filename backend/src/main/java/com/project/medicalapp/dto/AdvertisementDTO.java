package com.project.medicalapp.dto;

import com.project.medicalapp.entities.Advertisement;

import java.util.List;

public record AdvertisementDTO(Long id, String title, String description, Double price, UserDTO user, List<SpecialtyDTO> specialties) {
    public AdvertisementDTO(Advertisement advertisement) {
        this(advertisement.getId(),
            advertisement.getTitle(),
            advertisement.getDescription(),
            advertisement.getPrice(),
            new UserDTO(advertisement.getUser()),
            advertisement.getSpecialties().stream().map(SpecialtyDTO::new).toList());
    }
}
