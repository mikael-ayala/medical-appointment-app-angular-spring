package com.project.medicalapp.controllers;

import com.project.medicalapp.dto.AppointmentDTO;
import com.project.medicalapp.dto.AppointmentRequestDTO;
import com.project.medicalapp.services.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/appointments")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;

    @GetMapping("/{date}")
    public ResponseEntity<Boolean> existsByDate(@PathVariable String date) throws ParseException {
        boolean exists = appointmentService.existsByDate(date);
        return ResponseEntity.ok(exists);
    }

    @PostMapping
    public ResponseEntity<AppointmentDTO> save(@RequestBody AppointmentRequestDTO body) throws ParseException {
        AppointmentDTO appointment = appointmentService.save(body);
        return ResponseEntity.ok(appointment);
    }
}
