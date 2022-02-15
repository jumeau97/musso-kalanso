package com.example.mussokalanso.mussokalansoBack.Utilisateur;

import com.example.mussokalanso.mussokalansoBack.payload.Auth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/mussokalanso")
public class UtilisateurControler {

    @Autowired
    UtilisateurService utilisateurService;

    @PostMapping(value="/login")
    public @ResponseBody
    ResponseEntity<?> login(@RequestBody Auth auth){
        return new ResponseEntity<>(utilisateurService.login(auth), HttpStatus.OK);
    }
    
    //find all user
    @GetMapping(value="/utilisateurs")
    public @ResponseBody ResponseEntity<?> findAllUser(){
        return new ResponseEntity<>(utilisateurService.findAllUser(),HttpStatus.OK);
    }

    //save new user
    @PostMapping("/save/utilisateur")
    public @ResponseBody ResponseEntity<?> saveUser(Utilisateur utilisateur){
        return new ResponseEntity<>(utilisateurService.saveUser(utilisateur), HttpStatus.OK);
    }

}
