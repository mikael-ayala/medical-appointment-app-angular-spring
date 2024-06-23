package com.project.medicalapp.controllers;

import com.project.medicalapp.dto.LoginRequestDTO;
import com.project.medicalapp.dto.RegisterRequestDTO;
import com.project.medicalapp.dto.ResponseDTO;
import com.project.medicalapp.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody LoginRequestDTO body) {
        ResponseDTO response = authService.login(body);

        if (response == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(response);
    }

    @PostMapping("/patient-register")
    public ResponseEntity<ResponseDTO> patientRegister(@RequestBody RegisterRequestDTO body) {
        ResponseDTO response = authService.patientRegister(body);

        if (response == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(response);
    }

    @PostMapping("/doctor-register")
    public ResponseEntity<ResponseDTO> doctorRegister(@RequestBody RegisterRequestDTO body) {
        ResponseDTO response = authService.doctorRegister(body);

        if (response == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(response);
    }
}
