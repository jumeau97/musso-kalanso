package com.example.mussokalanso.mussokalansoBack.Inscription;

import com.example.mussokalanso.mussokalansoBack.Apprenant.Apprenant;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import com.example.mussokalanso.mussokalansoBack.payload.SubscribeLearner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class InscriptionService {

    @Autowired
    InscriptionRepository inscriptionRepository;
    //subscribe learner
    public Response subscribeLearner(SubscribeLearner subscribeLearner){

        Inscription nSubscribe = new Inscription();
        nSubscribe.setApprenant(subscribeLearner.getApprenant());
        nSubscribe.setModule(subscribeLearner.getModule());
        //nSubscribe.getDateInsc(new Date());
        inscriptionRepository.save(nSubscribe);
        return Response.success("enregistrer avec succès");



    }
}
