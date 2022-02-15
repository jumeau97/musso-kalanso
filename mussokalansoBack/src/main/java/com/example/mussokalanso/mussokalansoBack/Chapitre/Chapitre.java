package com.example.mussokalanso.mussokalansoBack.Chapitre;

import com.example.mussokalanso.mussokalansoBack.Module.Module;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor

public class Chapitre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String libelle;
    private String video;
    private String description;
    private String doc1;
    private String doc2;
    private Integer numChapitre;

    @ManyToOne
    private Module module;

    public Integer getNumChapitre() {
        return numChapitre;
    }

    public void setNumChapitre(Integer numChapitre) {
        this.numChapitre = numChapitre;
    }

    public Module getModule() {
        return module;
    }

    public void setModule(Module module) {
        this.module = module;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDoc1() {
        return doc1;
    }

    public void setDoc1(String doc1) {
        this.doc1 = doc1;
    }

    public String getDoc2() {
        return doc2;
    }

    public void setDoc2(String doc2) {
        this.doc2 = doc2;
    }
}
