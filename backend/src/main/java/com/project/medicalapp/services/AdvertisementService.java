package com.project.medicalapp.services;

import com.project.medicalapp.dto.AdvertisementDTO;
import com.project.medicalapp.entities.Advertisement;
import com.project.medicalapp.repositories.AdvertisementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AdvertisementService {
    private final AdvertisementRepository advertisementRepository;

    @Transactional(readOnly = true)
    public Page<AdvertisementDTO> findAll(Pageable pageable) {
        Page<Advertisement> page = advertisementRepository.searchAdvertisementWithUserAndSpecialties(pageable);
        return page.map(AdvertisementDTO::new);
    }
}
