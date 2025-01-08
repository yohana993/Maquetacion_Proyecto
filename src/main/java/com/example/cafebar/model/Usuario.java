package com.example.cafebar.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

// @Entity
public class Usuario {
    public Long id;

    @NotBlank(message = "El nombre es obligatorio")
    public String nombres;

    @NotBlank(message = "El apellido es obligatorio")
    public String apellidos;

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "El email debe ser válido")
    public String email;

    public String telefono;

    public String role;

    // Getters y setters
}
