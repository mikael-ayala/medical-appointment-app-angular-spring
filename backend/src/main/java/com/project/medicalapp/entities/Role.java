package com.project.medicalapp.entities;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    ROLE_PATIENT,
    ROLE_DOCTOR;

    @Override
    public String getAuthority() {
        return name();
    }
}
