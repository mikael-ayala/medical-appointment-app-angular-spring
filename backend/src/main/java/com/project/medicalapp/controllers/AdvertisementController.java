package com.project.medicalapp.controllers;

import com.project.medicalapp.dto.AdvertisementDTO;
import com.project.medicalapp.services.AdvertisementService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/advertisements")
@RequiredArgsConstructor
public class AdvertisementController {
    private final AdvertisementService advertisementService;

    @GetMapping
    public ResponseEntity<Page<AdvertisementDTO>> findAll(Pageable pageable) {
        Page<AdvertisementDTO> advertisements = advertisementService.findAll(pageable);
        return ResponseEntity.ok(advertisements);
    }
}
