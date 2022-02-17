package com.example.mussokalanso.mussokalansoBack.Module;

import com.example.mussokalanso.mussokalansoBack.Apprenant.Apprenant;
import com.example.mussokalanso.mussokalansoBack.Categorie.Categorie;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.web.bind.annotation.PathVariable;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface ModuleRepository extends JpaRepository<Module, Long> {
    @Query(
            value = "SELECT * FROM Module u ORDER BY u.id ASC LIMIT 4 ",
            nativeQuery = true)
    List<Module> findLastFM();


    @Query("SELECT m FROM Module m WHERE m.categorie=:categorie AND m.etat=true")
    List<Module> findByCategorieAndEtat(@PathVariable(value = ":categorie") Categorie categorie);


    //module by id category
    Optional<Module> findByCategorie(Categorie categorie);

    //module by id apprenant
    //Optional<Module> findByApprenant(Apprenant apprenant);

}
