package com.example.mussokalanso.mussokalansoBack.Apprenant;

import com.example.mussokalanso.mussokalansoBack.Categorie.Categorie;
import com.example.mussokalanso.mussokalansoBack.Module.Module;
import com.example.mussokalanso.mussokalansoBack.Module.ModuleRepository;
import com.example.mussokalanso.mussokalansoBack.payload.Auth;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ApprenantService {

    @Autowired
    private ApprenantRepository apprenantRepository;
    ModuleRepository moduleRepository;

    //Autentication
    public Response login(Auth auth){

        Apprenant a= apprenantRepository.findApprenantByEmailAndMotDePasse(auth.getEmail(), auth.getMotDePasse());

        try{
            if(a==null){
                return Response.error("Vous n'êtes pas reconnu en tant que utilisateur");
            }


        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue");
        }
        return Response.with("Connecté avec succès", a);
    }

    //find all learner

    public Response findAllLearner(){
        List<Apprenant> listApp = new ArrayList<>();

        try{
            listApp=apprenantRepository.findAll();
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.with("Liste des apprenants", listApp);
    }

    //update chapitre
    public  Response updateApprenant(Apprenant apprenant, Long id){

        try{
            Apprenant m = apprenantRepository.getById(id);
            if(m!=null) {
                m.setNom_prenom(apprenant.getNom_prenom());
                m.setAdresse(apprenant.getAdresse());
                m.setTel(apprenant.getTel());
                m.setEmail(apprenant.getEmail());
                m.setMotDePasse(apprenant.getMotDePasse());
                apprenantRepository.save(m);
            }
        }catch(Exception e) {
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.success("modification reussie");
    }

    //Delete learner
    public Response deleteApprenant(Apprenant apprenant){
        Optional<Module> c= moduleRepository.findByApprenant(apprenant);

        if(c.isEmpty()){
            apprenantRepository.delete(apprenant);
        }
        return Response.success("suppression reussie avec succès");

    }

}
