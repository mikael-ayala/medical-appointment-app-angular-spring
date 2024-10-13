package com.project.medicalapp.services;

import com.project.medicalapp.dto.AppointmentDTO;
import com.project.medicalapp.dto.AppointmentRequestDTO;
import com.project.medicalapp.entities.Advertisement;
import com.project.medicalapp.entities.Appointment;
import com.project.medicalapp.entities.User;
import com.project.medicalapp.repositories.AdvertisementRepository;
import com.project.medicalapp.repositories.AppointmentRepository;
import com.project.medicalapp.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;
    private final AdvertisementRepository advertisementRepository;
    private final UserRepository userRepository;
    private final AuthService authService;

    @Transactional
    public AppointmentDTO save(AppointmentRequestDTO body) throws ParseException {
        Appointment newAppointment = new Appointment();

        //String pattern = "EEE MMM dd yyyy HH:mm:ss 'GMT'Z";
        String pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern, Locale.US);
        Date date = simpleDateFormat.parse(body.date());
        System.out.println(date);
        newAppointment.setDate(date);

        User patient = authService.authenticated();
        newAppointment.setPatient(patient);

        User doctor = userRepository.getReferenceById(body.doctorId());
        newAppointment.setDoctor(doctor);

        Advertisement advertisement = advertisementRepository.getReferenceById(body.advertisementId());
        newAppointment.setPrice(advertisement.getPrice());

        appointmentRepository.save(newAppointment);
        return new AppointmentDTO(newAppointment);
    }
}
