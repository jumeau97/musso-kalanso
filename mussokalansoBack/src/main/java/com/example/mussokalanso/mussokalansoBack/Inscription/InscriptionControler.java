package com.example.mussokalanso.mussokalansoBack.Inscription;

import com.example.mussokalanso.mussokalansoBack.payload.SubscribeLearner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

}
