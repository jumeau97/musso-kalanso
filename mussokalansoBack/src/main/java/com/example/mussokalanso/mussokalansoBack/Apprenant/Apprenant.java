package com.example.mussokalanso.mussokalansoBack.Apprenant;

import com.example.mussokalanso.mussokalansoBack.Inscription.Inscription;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Collection;

@Entity
public class Apprenant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String nom_prenom;
    private String adresse;
    private String tel;
    private String email;
    private String motDePasse;

    public Apprenant() {
    }

    public Apprenant(long id, String nom_prenom, String adresse, String tel, String email, String motDePasse) {
        this.id = id;
        this.nom_prenom = nom_prenom;
        this.adresse = adresse;
        this.tel = tel;
        this.email = email;
        this.motDePasse = motDePasse;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom_prenom() {
        return nom_prenom;
    }

    public void setNom_prenom(String nom_prenom) {
        this.nom_prenom = nom_prenom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }
}
