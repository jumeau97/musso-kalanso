package com.example.mussokalanso.mussokalansoBack.Inscription;

import com.example.mussokalanso.mussokalansoBack.Apprenant.Apprenant;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import com.example.mussokalanso.mussokalansoBack.payload.SubscribeLearner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class
InscriptionService {

    @Autowired
    InscriptionRepository inscriptionRepository;
    //subscribe learner
    public Response subscribeLearner(SubscribeLearner subscribeLearner){

        Inscription nSubscribe = new Inscription();
        nSubscribe.setApprenant(subscribeLearner.getApprenant());
        nSubscribe.setModule(subscribeLearner.getModule());
        nSubscribe.setDateInsc(new Date());
        inscriptionRepository.save(nSubscribe);
        return Response.success("enregistrer avec succès");

    }

    //find learner by module
    public Response getApprenantByModuleSubs(Long id, Long idm){
        Inscription ins = inscriptionRepository.getInscriptionByApprenantAndModule(id, idm);

        try{
            if(ins == null){
               return Response.error("vous n'êtes pas inscrit sur ce module");
            }

        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }

        return Response.success("vous êtes dejà inscrit sur ce module");
    }

    //find differents modules that learner is subscribe
    public Response LearnerModSubscribe(Apprenant apprenant){
        List<Inscription> list = new ArrayList<>();
       try{
           list = inscriptionRepository.findInscriptionByApprenant(apprenant);
       }catch (Exception e){
           e.printStackTrace(System.out);
           return Response.error("une erreur est survenue");
       }

       return Response.with("liste retournée", list);
    }
}
