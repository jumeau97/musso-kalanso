package com.example.mussokalanso.mussokalansoBack.Apprenant;

import com.example.mussokalanso.mussokalansoBack.payload.Auth;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApprenantService {

    @Autowired
    private ApprenantRepository apprenantRepository;

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
}
