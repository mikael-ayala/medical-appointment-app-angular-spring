package com.project.medicalapp.repositories;

import com.project.medicalapp.entities.Advertisement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {
    @Query("SELECT obj FROM Advertisement obj JOIN FETCH obj.user JOIN FETCH obj.specialties")
    Page<Advertisement> searchAdvertisementWithUserAndSpecialties(Pageable pageable);
}
