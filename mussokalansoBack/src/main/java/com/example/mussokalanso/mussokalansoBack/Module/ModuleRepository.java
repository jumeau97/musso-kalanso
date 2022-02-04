package com.example.mussokalanso.mussokalansoBack.Module;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ModuleRepository extends JpaRepository<Module, Long> {
    @Query(
            value = "SELECT * FROM Module u ORDER BY u.id ASC LIMIT 1 ",
            nativeQuery = true)
    List<Module> findLastFM();




}
