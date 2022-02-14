package com.example.mussokalanso.mussokalansoBack.Apprenant;

import com.example.mussokalanso.mussokalansoBack.payload.Auth;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin
@RestController
@RequestMapping(path = "api/mussokalanso/learn")
public class ApprenantControler {
    
    @Autowired
    ApprenantService apprenantService;

    @PostMapping(value="/login")
    public @ResponseBody
    ResponseEntity<?> login(@RequestBody Auth auth){
        return new ResponseEntity<>(apprenantService.login(auth), HttpStatus.OK);
    }

    //find all learner
    @GetMapping("all/learner")
    public @ResponseBody ResponseEntity<?> findAllLearner(){
        return new ResponseEntity<>(apprenantService.findAllLearner(), HttpStatus.OK);
    }

    
}
