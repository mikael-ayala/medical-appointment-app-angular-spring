package com.project.medicalapp.controllers;

import com.project.medicalapp.dto.AdvertisementDTO;
import com.project.medicalapp.dto.AdvertisementRequestDTO;
import com.project.medicalapp.services.AdvertisementService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/advertisements")
@RequiredArgsConstructor
public class AdvertisementController {
    private final AdvertisementService advertisementService;

    @GetMapping
    public ResponseEntity<Page<AdvertisementDTO>> findAll(
            @RequestParam(value = "specialtyId", defaultValue = "") String specialtyId,
            Pageable pageable) {
        Page<AdvertisementDTO> advertisements = advertisementService.findAll(specialtyId ,pageable);
        return ResponseEntity.ok(advertisements);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdvertisementDTO> findById(@PathVariable Long id) {
        AdvertisementDTO advertisement = advertisementService.findById(id);
        return ResponseEntity.ok(advertisement);
    }

    @PostMapping
    public ResponseEntity<AdvertisementDTO> save(@RequestBody AdvertisementRequestDTO body) {
        AdvertisementDTO advertisement = advertisementService.save(body);
        return ResponseEntity.ok(advertisement);
    }
}
