package com.project.medicalapp.services;

import com.project.medicalapp.dto.LoginRequestDTO;
import com.project.medicalapp.dto.RegisterRequestDTO;
import com.project.medicalapp.dto.ResponseDTO;
import com.project.medicalapp.entities.Role;
import com.project.medicalapp.entities.User;
import com.project.medicalapp.infra.security.TokenService;
import com.project.medicalapp.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @Transactional(readOnly = true)
    public ResponseDTO login(LoginRequestDTO body) {
        User user = this.userRepository.findByEmail(body.email())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(body.password(), user.getPassword())) {
            return null;
        }

        String token = this.tokenService.generateToken(user);

        return new ResponseDTO(user.getName(), token);
    }

    @Transactional
    public ResponseDTO patientRegister(RegisterRequestDTO body) {
        Optional<User> user = this.userRepository.findByEmail(body.email());

        if (user.isPresent()) {
            return null;
        }

        User newUser = new User();

        newUser.setPassword(passwordEncoder.encode(body.password()));
        newUser.setEmail(body.email());
        newUser.setName(body.name());
        newUser.setLastname(body.lastname());
        newUser.setRole(Role.ROLE_PATIENT);

        this.userRepository.save(newUser);

        String token = this.tokenService.generateToken(newUser);

        return new ResponseDTO(newUser.getName(), token);
    }

    @Transactional
    public ResponseDTO doctorRegister(RegisterRequestDTO body) {
        Optional<User> user = this.userRepository.findByEmail(body.email());

        if (user.isPresent()) {
            return null;
        }

        User newUser = new User();

        newUser.setPassword(passwordEncoder.encode(body.password()));
        newUser.setEmail(body.email());
        newUser.setName(body.name());
        newUser.setLastname(body.lastname());
        newUser.setRole(Role.ROLE_DOCTOR);

        this.userRepository.save(newUser);

        String token = this.tokenService.generateToken(newUser);

        return new ResponseDTO(newUser.getName(), token);
    }

    protected User authenticated() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentName = authentication.getName();
        return userRepository.findByEmail(currentName)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
