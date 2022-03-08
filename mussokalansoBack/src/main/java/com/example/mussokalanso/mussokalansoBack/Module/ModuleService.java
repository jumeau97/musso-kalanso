package com.example.mussokalanso.mussokalansoBack.Module;

import com.example.mussokalanso.mussokalansoBack.Apprenant.Apprenant;
import com.example.mussokalanso.mussokalansoBack.Categorie.Categorie;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ModuleService {

    @Autowired
    ModuleRepository moduleRepository;
    //find the bottom four module insert
    public Response findLastFM(){
        List<Module> m= new ArrayList<>();

        try{
            m= moduleRepository.findLastFM();

        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.with("la liste des modules", m);
    }


    //afficher les modules par categorie
    public Response findModuleByCateg(Categorie categorie){
        List<Module> m= new ArrayList<>();

        try{
            m=moduleRepository.findByCategorieAndEtat(categorie);
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.with("la liste des modules par categorie", m);
    }

    //recuperer un module à travers son identifiant
    public Response togetByIdModule(Long id){
        Optional<Module> m = moduleRepository.findById(id);

        try{
           if(m==null){
               return Response.success("contenu vide");
           }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.with("module retourné avec succès", m);
    }

    //save a new module
    public Response saveModule(Module module){
        module.setEtat(false);

        try{
            moduleRepository.save(module);
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une ereeur est survenue");
        }

        return Response.success("Enregistrer avec succès");
    }

    //find all module
    public Response findAllModule(){
        List<Module> listModule = new ArrayList<>();

        try {
            listModule = moduleRepository.findAll();
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue");
        }
        return Response.with("la liste des modules", listModule);
    }

    //all module published
    public Response allModulePublished(){
        List<Module> listMod = new ArrayList<>();

        try{
            listMod = moduleRepository.findAllByEtatTrue();
        }catch(Exception e){
            e.printStackTrace(System.out);
        }
        return Response.with("Liste retournée", listMod);
    }

    //update module
    public  Response updateModule(Module module, Long id){

        try{
            Module m = moduleRepository.getById(id);
            if(m!=null) {
                m.setLibelle(module.getLibelle());
                m.setDescription(module.getDescription());
                m.setCategorie(module.getCategorie());
            }
            moduleRepository.save(m);
        }catch(Exception e) {
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.success("modification reussie");
    }

    //publish module
    public Response publish(Long id){
        Module c =moduleRepository.getById(id);

        try{
            if(c != null){
                c.setEtat(true);
                moduleRepository.save(c);
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.success("mis à l'etat publier");
    }

    //unpublish module
    public Response unpublish(Long id){
        Module c =moduleRepository.getById(id);

        try{
            if(c != null){ c.setEtat(false);
            moduleRepository.save(c);
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return  Response.error("une erreur est survenue");
        }
        return Response.success("mis à l'etat dépublier");
    }



}
