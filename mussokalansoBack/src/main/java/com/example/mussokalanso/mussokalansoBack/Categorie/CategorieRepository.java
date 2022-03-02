package com.example.mussokalanso.mussokalansoBack.Categorie;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {

    //publish a category
    List<Categorie> findAllByEtatTrue();


}
