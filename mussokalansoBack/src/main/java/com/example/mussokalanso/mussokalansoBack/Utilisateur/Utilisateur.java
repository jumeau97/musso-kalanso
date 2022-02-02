package com.example.mussokalanso.mussokalansoBack.Utilisateur;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom_prenom;
    private String profession;
    private String domaine;
    private String adresse;
    private String motDePasse;
    private String email;
    private String genre;
    private String tel;
    private String  description;
    private boolean statut;

}
