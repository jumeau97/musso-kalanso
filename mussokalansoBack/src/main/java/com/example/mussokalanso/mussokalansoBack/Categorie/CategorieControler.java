package com.example.mussokalanso.mussokalansoBack.Categorie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/mussokalanso")
public class CategorieControler {

    @Autowired
    CategorieService categorieService;

    @GetMapping("/allCategory")
    public @ResponseBody ResponseEntity<?> findAllCategory(){
        return new ResponseEntity<>(categorieService.allCategory(), HttpStatus.OK);
    }
}
