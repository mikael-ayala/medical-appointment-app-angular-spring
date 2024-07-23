package com.project.medicalapp.services;

import com.project.medicalapp.dto.AdvertisementDTO;
import com.project.medicalapp.dto.AdvertisementRequestDTO;
import com.project.medicalapp.dto.SpecialtyDTO;
import com.project.medicalapp.entities.Advertisement;
import com.project.medicalapp.entities.Specialty;
import com.project.medicalapp.entities.User;
import com.project.medicalapp.repositories.AdvertisementRepository;
import com.project.medicalapp.repositories.SpecialtyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AdvertisementService {
    private final AdvertisementRepository advertisementRepository;
    private final SpecialtyRepository specialtyRepository;
    private final AuthService authService;

    @Transactional(readOnly = true)
    public Page<AdvertisementDTO> findAll(String specialtyId, Pageable pageable) {
        Long parsedSpecialtyId = null;
        if (!specialtyId.equals("")) parsedSpecialtyId = Long.parseLong(specialtyId);

        Page<Advertisement> page = advertisementRepository.searchAdvertisementWithUserAndSpecialties(parsedSpecialtyId, pageable);
        return page.map(AdvertisementDTO::new);
    }

    @Transactional(readOnly = true)
    public AdvertisementDTO findById(Long id) {
        Advertisement advertisement = advertisementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Advertisement not found"));
        return new AdvertisementDTO(advertisement);
    }

    @Transactional
    public AdvertisementDTO save(AdvertisementRequestDTO body) {
        Advertisement newAdvertisement = new Advertisement();
        newAdvertisement.setTitle(body.title());
        newAdvertisement.setDescription(body.description());
        newAdvertisement.setPrice(body.price());

        User user = authService.authenticated();
        newAdvertisement.setUser(user);

        for (SpecialtyDTO specialtyDTO : body.specialties()) {
            Specialty specialty = specialtyRepository.getReferenceById(specialtyDTO.id());
            newAdvertisement.getSpecialties().add(specialty);
        }

        advertisementRepository.save(newAdvertisement);

        return new AdvertisementDTO(newAdvertisement);
    }
}
