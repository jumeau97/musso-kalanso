package com.example.mussokalanso.mussokalansoBack.Module;

import com.example.mussokalanso.mussokalansoBack.Categorie.Categorie;
import com.example.mussokalanso.mussokalansoBack.Inscription.Inscription;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Module {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String libelle;
    private String description;
    private boolean etat;
    @ManyToOne
    private Categorie categorie;
}
