package com.project.medicalapp.controllers;

import com.project.medicalapp.dto.AppointmentDTO;
import com.project.medicalapp.dto.AppointmentRequestDTO;
import com.project.medicalapp.services.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/appointments")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<AppointmentDTO> save(@RequestBody AppointmentRequestDTO body) throws ParseException {
        AppointmentDTO appointment = appointmentService.save(body);
        return ResponseEntity.ok(appointment);
    }
}
