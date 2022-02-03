package com.example.mussokalanso.mussokalansoBack.Utilisateur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long > {

    Utilisateur findUtilisateurByEmailAndMotDePasse(String email, String motDePasse);
}
