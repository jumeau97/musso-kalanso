package com.example.mussokalanso.mussokalansoBack.Utilisateur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long > {

    Utilisateur findUtilisateurByEmailAndMotDePasse(String email, String motDePasse);

    //find formers
    List<Utilisateur> findUtilisateurByStatut(Boolean statut);
}
