package com.example.mussokalanso.mussokalansoBack.Apprenant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ApprenantRepository extends JpaRepository<Apprenant, Long> {

    Apprenant findApprenantByEmailAndMotDePasse(String email, String motDePasse);
}
