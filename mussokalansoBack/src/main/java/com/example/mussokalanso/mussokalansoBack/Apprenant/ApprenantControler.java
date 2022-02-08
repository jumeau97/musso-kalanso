package com.example.mussokalanso.mussokalansoBack.Apprenant;

import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping(path = "api/mussokalanso")
public class ApprenantControler {
    
    @Autowired
    ApprenantService apprenantService;
    


    
}
