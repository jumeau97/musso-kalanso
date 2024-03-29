package com.example.mussokalanso.mussokalansoBack.Chapitre;
import com.example.mussokalanso.mussokalansoBack.Categorie.Categorie;
import com.example.mussokalanso.mussokalansoBack.Module.Module;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    //insert new chapitre
    public Response saveChapitre(Chapitre chapitre){
        Chapitre lastChap = chapitreRepository.getTopByOrderByNumChapitreDesc();

        try{
            if(lastChap == null){
                chapitre.setNumChapitre(1);


            }else{

                chapitre.setNumChapitre(lastChap.getNumChapitre()+1);
            }

            chapitreRepository.save(chapitre);

        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.success("insertion reussie");
    }

    //update chapitre
    public  Response updateChapitre(Chapitre chapitre, Long id){

        try{
            Chapitre m = chapitreRepository.getById(id);
            if(m!=null) {
                m.setLibelle(chapitre.getLibelle());
                m.setDescription(chapitre.getDescription());
                m.setVideo(chapitre.getVideo());
                chapitreRepository.save(m);
            }
        }catch(Exception e) {
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.success("modification reussie");
    }

    //supprimer chapitre
    public  Response supprimerChapitre(Long id){

        try{
            chapitreRepository.deleteById(id);
            return Response.success("Supprimé avec succès");
        }

        catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

    }

    //get all chapter by module
    public Response getChaptersByModule(Long id){
        List<Chapitre> listChapter = new ArrayList<>();


        try{
            listChapter = chapitreRepository.findChapitreByIdModule(id);
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.with("liste retournée", listChapter);
    }

    //details chapitre by id

    public Response findChapitreById(Long id){
        Optional<Chapitre> chapitre;

        try {
            chapitre = chapitreRepository.findById(id);

        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.with("details chapitre", chapitre);
    }


}


