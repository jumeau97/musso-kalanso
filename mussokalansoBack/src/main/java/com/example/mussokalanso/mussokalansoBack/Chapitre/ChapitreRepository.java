package com.example.mussokalanso.mussokalansoBack.Chapitre;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ChapitreRepository extends JpaRepository<Chapitre, Long> {




}
