package com.example.mussokalanso.mussokalansoBack.Utilisateur;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Utilisateur implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nomPrenom;
    private String profession;
    private String domaine;
    private String adresse;
    private String motDePasse;
    private String email;
    private boolean genre;
    private String tel;
    private String  description;
    private boolean statut;






}
