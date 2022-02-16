package com.example.mussokalanso.mussokalansoBack.Utilisateur;

import com.example.mussokalanso.mussokalansoBack.Apprenant.Apprenant;
import com.example.mussokalanso.mussokalansoBack.payload.Auth;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;
    //Authentification

    public Response login(Auth auth){

        Utilisateur a= utilisateurRepository.findUtilisateurByEmailAndMotDePasse(auth.getEmail(), auth.getMotDePasse());

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


    //la liste de tous les utilisateurs

    public Response findAllUser(){
        List <Utilisateur> a= new ArrayList<>();
        try{
            a=utilisateurRepository.findAll();
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.with("liste retournée", a);
    }

    //save new user
    public Response saveUser(Utilisateur utilisateur){

        try{
            utilisateurRepository.save(utilisateur);
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue");
        }

        return Response.success("Enregistrer avec succès");
    }

    //update user
    public  Response updateUtilisateur(Utilisateur utilisateur, Long id){

        try{
            Utilisateur m = utilisateurRepository.getById(id);
            if(m!=null) {
                m.setNomPrenom(utilisateur.getNomPrenom());
                m.setProfession(utilisateur.getProfession());
                m.setAdresse(utilisateur.getAdresse());
                m.setDomaine(utilisateur.getDomaine());
                m.setTel(utilisateur.getTel());
                m.setEmail(utilisateur.getEmail());
                m.setMotDePasse(utilisateur.getMotDePasse());
                m.setDescription(utilisateur.getDescription());
                utilisateurRepository.save(m);
            }
        }catch(Exception e) {
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.success("modification reussie");
    }

}
