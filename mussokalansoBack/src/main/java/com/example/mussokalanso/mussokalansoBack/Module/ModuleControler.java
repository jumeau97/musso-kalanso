package com.example.mussokalanso.mussokalansoBack.Module;

import com.example.mussokalanso.mussokalansoBack.Categorie.Categorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/mussokalanso")
public class ModuleControler {
    @Autowired
    ModuleService moduleService;


    //les quatres derniers modules
    @GetMapping("/fourModule")
    public @ResponseBody
    ResponseEntity<?> find4Module(){
        return new ResponseEntity<>(moduleService.findLastFM(), HttpStatus.OK);
    }

    //la liste des modules par categorie
    @PostMapping("categorie/modules")
    public @ResponseBody
    ResponseEntity<?> findByCateg(@RequestBody Categorie categorie){
        return new ResponseEntity<>(moduleService.findModuleByCateg(categorie), HttpStatus.OK);
    }

    //recuperer un module à travers l'identifiant du module
    @GetMapping("/module/{id}")
    public @ResponseBody
    ResponseEntity<?> togetByIdModule(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(moduleService.togetByIdModule(id), HttpStatus.OK);
    }
}
