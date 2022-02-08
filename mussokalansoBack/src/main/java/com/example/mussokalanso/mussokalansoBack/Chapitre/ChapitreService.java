package com.example.mussokalanso.mussokalansoBack.Chapitre;

import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChapitreService {

    @Autowired
    ChapitreRepository chapitreRepository;
    // all chapitre
    public Response allChapitre(){
        List<Chapitre> chp = new ArrayList();

        try{
            chp=chapitreRepository.findAll();
        }catch (Exception e){
            e.printStackTrace(System.out);
            return  Response.error("Il ya une erreur");
        }
        return Response.with("",chp);
    }

    //insert new chapiter
    public Response saveChapitre(Chapitre chapitre){
        try{
            chapitreRepository.save(chapitre);
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.success("insertion reussie");
    }

    //update chapiter
    public  Response updateChapitre(Chapitre chapitre, Long id){

        try{
            Chapitre m = chapitreRepository.getById(id);
            if(m!=null) {
                m.setLibelle(chapitre.getLibelle());
                chapitreRepository.save(m);
            }
        }catch(Exception e) {
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.success("modification reussie");
    }

    //supprimer chapiter
    public  Response supprimerChapitre(Chapitre chapitre, Long id){

        try{
            chapitreRepository.deleteById(id);
            return Response.success("Supprimé avec succès");
        }

        catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        }


}


