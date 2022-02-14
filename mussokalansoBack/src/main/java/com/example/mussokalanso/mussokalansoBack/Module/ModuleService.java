package com.example.mussokalanso.mussokalansoBack.Module;

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




}
