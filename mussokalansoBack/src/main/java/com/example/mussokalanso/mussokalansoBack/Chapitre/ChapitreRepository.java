package com.example.mussokalanso.mussokalansoBack.Chapitre;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ChapitreRepository extends JpaRepository<Chapitre, Long> {

    //get chapter by module
    @Query("SELECT chap FROM Chapitre chap WHERE chap.module.id = :id")
    List<Chapitre> findChapitreByIdModule(@Param(value = "id") Long id);


    //Chapitre findTopByOrderByNumChapitreDesc();

    //get last chapter
    Chapitre getTopByOrderByNumChapitreDesc();


}
