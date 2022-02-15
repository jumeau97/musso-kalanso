package com.example.mussokalanso.mussokalansoBack.Chapitre;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ChapitreRepository extends JpaRepository<Chapitre, Long> {

    //get chapter by module
    List<Chapitre> findChapitreByModule(Module module);


    //Chapitre findTopByOrderByNumChapitreDesc();

    //get last chapter
    Chapitre getTopByOrderByNumChapitreDesc();


}
