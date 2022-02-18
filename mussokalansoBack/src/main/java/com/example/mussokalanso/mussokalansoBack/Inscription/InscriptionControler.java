package com.example.mussokalanso.mussokalansoBack.Inscription;

import com.example.mussokalanso.mussokalansoBack.Apprenant.Apprenant;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import com.example.mussokalanso.mussokalansoBack.payload.SubscribeLearner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;

@CrossOrigin
@RestController
@RequestMapping(path = "api/mussokalanso")
public class InscriptionControler {
    @Autowired
    InscriptionService inscriptionService;

    //subscribe learner
    @PostMapping("/subscribe")
    public @ResponseBody
    ResponseEntity<?> subscribe(@RequestBody SubscribeLearner subscribeLearner){
        return new ResponseEntity<>(inscriptionService.subscribeLearner(subscribeLearner), HttpStatus.OK);
    }

    //check if your subscribe on this module
    @GetMapping("/get/subscribe/{id}/{idm}")
    public @ResponseBody ResponseEntity<?> getApprenantByModuleSubs(
            @PathVariable(value = "id") Long id,
            @PathVariable(value = "idm") Long idm
    ){
        return new ResponseEntity<>(inscriptionService.getApprenantByModuleSubs(id, idm), HttpStatus.OK);
    }

    //find differents modules that learner is subscribe
    @PostMapping("/learner/inscriptions")
    public @ResponseBody ResponseEntity<?> getModulesLearner(@RequestBody Apprenant apprenant){
        return new ResponseEntity<>(inscriptionService.LearnerModSubscribe(apprenant), HttpStatus.OK);
    }



}
