package com.example.mussokalanso.mussokalansoBack.Chapitre;

import com.example.mussokalanso.mussokalansoBack.Categorie.Categorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping(path = "api/mussokalanso")
public class ChapitreControler {
    @Autowired
    ChapitreService chapitreService;
    @GetMapping("/allChapitre")
    public @ResponseBody ResponseEntity<?> findAllChapitre(){
        return new ResponseEntity<>(chapitreService.allChapitre(), HttpStatus.OK);
    }

    //insert chapitre
    @PostMapping("/save/chapitre")
    public @ResponseBody ResponseEntity<?> saveCategory(@RequestBody Chapitre chapitre){
        return new ResponseEntity<>(chapitreService.saveChapitre(chapitre), HttpStatus.OK);
    }

    //update chapitre
        @PutMapping("/update/chapitre/{id}")
    public @ResponseBody ResponseEntity<?> updateChapitre(@RequestBody Chapitre chapitre,
                                                          @PathVariable(value = "id") Long id){
        return new ResponseEntity<>(chapitreService.updateChapitre(chapitre, id), HttpStatus.OK);
    }

    //supprimer chapitre
    @DeleteMapping("/delete/chapter/{id}")
    public @ResponseBody ResponseEntity<?> deleteChapter(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(chapitreService.supprimerChapitre(id), HttpStatus.OK);
    }

    //get chapters by module
    @GetMapping("/module/chapters/{id}")
    public @ResponseBody ResponseEntity<?> getChapterByModule(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(chapitreService.getChaptersByModule(id), HttpStatus.OK);
    }

    //find details chapitre by chapitre
    @GetMapping("/chapitre/{id}")
    public @ResponseBody ResponseEntity<?> findChapitre(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(chapitreService.findChapitreById(id), HttpStatus.OK);
    }
    

}
