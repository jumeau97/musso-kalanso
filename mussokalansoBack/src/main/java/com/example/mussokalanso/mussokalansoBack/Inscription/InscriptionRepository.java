package com.example.mussokalanso.mussokalansoBack.Inscription;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface InscriptionRepository extends JpaRepository<Inscription, Long> {


   // Inscription findInscriptionByApprenantAndModule(Apprenant apprenant, Module module);
    @Query("SELECT subs FROM Inscription subs WHERE subs.apprenant.id = :id AND subs.module.id = :idm ")
    Inscription getInscriptionByApprenantAndModule(@Param(value = "id") Long id, @Param(value = "idm") Long idm);
}
