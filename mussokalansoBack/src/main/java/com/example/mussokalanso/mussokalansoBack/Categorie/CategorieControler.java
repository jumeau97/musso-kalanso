package com.example.mussokalanso.mussokalansoBack.Categorie;

import com.example.mussokalanso.mussokalansoBack.payload.Response;
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

    //list of category published
    @GetMapping("/allCategory/published")
    public @ResponseBody ResponseEntity<?> findAllCategoryPub(){
        return new ResponseEntity<>(categorieService.categoryPublished(), HttpStatus.OK);
    }


    //update category
    @PutMapping("/update/category/{id}")
    public @ResponseBody ResponseEntity<?> updateCategory(@RequestBody Categorie categorie,
                                                          @PathVariable(value = "id") Long id){
        return new ResponseEntity<>(categorieService.updateCategory(categorie, id), HttpStatus.OK);
    }

    //insert category
    @PostMapping("/save/category")
    public @ResponseBody ResponseEntity<?> saveCategory(@RequestBody Categorie categorie){
        return new ResponseEntity<>(categorieService.saveCategory(categorie), HttpStatus.OK);
    }

    //delete category
    @DeleteMapping("/delete/category/{id}")
   public @ResponseBody ResponseEntity<?> deleteCategory(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(categorieService.deleteCategory(id), HttpStatus.OK);
    }

    //publish category
    @GetMapping("/category/publish/{id}")
    public @ResponseBody ResponseEntity<?> publish(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(categorieService.publish(id), HttpStatus.OK);
    }
    //unpublish category
    @GetMapping("/category/unpublish/{id}")
    public @ResponseBody ResponseEntity<?> unpublish(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(categorieService.unpublish(id), HttpStatus.OK);
    }

}
