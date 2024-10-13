package com.project.medicalapp.dto;

import com.project.medicalapp.entities.Appointment;
import com.project.medicalapp.entities.Status;

import java.util.Date;

public record AppointmentDTO(Long id, Date date, Status status, Double price, UserDTO patient, UserDTO doctor) {

    public AppointmentDTO(Appointment appointment) {
        this(appointment.getId(),
                appointment.getDate(),
                appointment.getStatus(),
                appointment.getPrice(),
                new UserDTO(appointment.getPatient()),
                new UserDTO(appointment.getDoctor()));
    }
}
