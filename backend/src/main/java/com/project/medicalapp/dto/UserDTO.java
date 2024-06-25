package com.project.medicalapp.dto;

import com.project.medicalapp.entities.User;

public record UserDTO(Long id, String name, String lastname) {
    public UserDTO(User user) {
        this(user.getId(), user.getName(), user.getLastname());
    }
}
