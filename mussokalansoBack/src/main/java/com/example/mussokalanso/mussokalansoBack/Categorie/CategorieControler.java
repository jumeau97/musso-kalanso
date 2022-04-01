package com.example.mussokalanso.mussokalansoBack.Categorie;

import com.example.mussokalanso.mussokalansoBack.Image.FileUtil;
import com.example.mussokalanso.mussokalansoBack.Module.Module;
import com.example.mussokalanso.mussokalansoBack.payload.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@CrossOrigin
@RestController
@RequestMapping(path = "api/mussokalanso")
public class CategorieControler {

    @Autowired
    CategorieService categorieService;

    @Autowired
    CategorieRepository categorieRepository;

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

    //find details category by category
    @GetMapping("/category/{id}")
    public @ResponseBody ResponseEntity<?> findCategory(@PathVariable("id") Long id){
        return new ResponseEntity<>(categorieService.findCategoryById(id), HttpStatus.OK);
    }

    //upload photo categorie
    @PostMapping("/uploadC")
    public @ResponseBody ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            createDirIfNotExist();

            byte[] bytes = new byte[0];
            bytes = file.getBytes();
            //System.out.println("file "+file.getOriginalFilename());
            Files.write(Paths.get(FileUtil.folderPath + file.getOriginalFilename()), bytes);
            return ResponseEntity.status(HttpStatus.OK)
                    .body("Files uploaded successfully: " + file.getOriginalFilename());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                    .body("Exception occurred for: " + file.getOriginalFilename() + "!");
        }
    }

    /**
     * Create directory to save files, if not exist
     */
    private void createDirIfNotExist() {
        //create directory to save the files
        File directory = new File(FileUtil.folderPath);
        if (!directory.exists()) {
            directory.mkdir();
        }
    }

    //Get photo by catégorie
    @GetMapping(path = "/images/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] image(@PathVariable("id") Long id) throws Exception{
        Categorie m = categorieRepository.findById(id).get();
        String photo = m.getPhoto();
        File file = new File(System.getProperty("user.home")+"/mussokalanso/images/"+photo);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

}
