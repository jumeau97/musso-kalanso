package com.example.mussokalanso.mussokalansoBack.Module;

import com.example.mussokalanso.mussokalansoBack.Apprenant.Apprenant;
import com.example.mussokalanso.mussokalansoBack.Categorie.Categorie;
import com.example.mussokalanso.mussokalansoBack.Chapitre.ChapitreService;
import com.example.mussokalanso.mussokalansoBack.Image.ImageUploadResponse;
import com.example.mussokalanso.mussokalansoBack.Image.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping(path = "api/mussokalanso")
public class ModuleControler {
    @Autowired
    ModuleService moduleService;

    @Autowired
    ModuleRepository moduleRepository;


    //les quatres derniers modules
    @GetMapping("/fourModule")
    public @ResponseBody
    ResponseEntity<?> find4Module(){
        return new ResponseEntity<>(moduleService.findLastFM(), HttpStatus.OK);
    }

    //la liste des modules par categorie avec etat =true
    @PostMapping("categorie/modules")
    public @ResponseBody
    ResponseEntity<?> findByCateg(@RequestBody Categorie categorie){
        return new ResponseEntity<>(moduleService.findModuleByCateg(categorie), HttpStatus.OK);
    }

    //la liste des modules par categorie avec etat confondue
    @PostMapping("categorie/all/module")
    public @ResponseBody ResponseEntity<?> findAllModuleByCategorie(@RequestBody Categorie categorie){
        return new ResponseEntity<>(moduleService.findAllModuleByCateg(categorie), HttpStatus.OK);
    }

    //recuperer un module à travers l'identifiant du module
    @GetMapping("/module/{id}")
    public @ResponseBody
    ResponseEntity<?> togetByIdModule(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(moduleService.togetByIdModule(id), HttpStatus.OK);
    }

    //save new module
    @PostMapping("save/module")
    public @ResponseBody
    ResponseEntity<?> saveModule(@RequestBody Module module){
        return new ResponseEntity<>(moduleService.saveModule(module), HttpStatus.OK);
    }
    
    //all module
    @GetMapping("/all/module")
    public @ResponseBody ResponseEntity<?> findAllModule(){
        return new ResponseEntity<>(moduleService.findAllModule(), HttpStatus.OK);
    }

    //all module published
    @GetMapping("all/module/published")
    public @ResponseBody ResponseEntity<?> allModulePublished(){
        return new ResponseEntity<>(moduleService.allModulePublished(), HttpStatus.OK);
    }

    //update module
    @PutMapping("/update/module/{id}")
    public @ResponseBody ResponseEntity<?> updateModule(@RequestBody Module module,
                                                           @PathVariable(value = "id") Long id){
        return new ResponseEntity<>(moduleService.updateModule(module, id), HttpStatus.OK);
    }

    //publish module
    @GetMapping("/module/publish/{id}")
    public @ResponseBody ResponseEntity<?> publish(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(moduleService.publish(id), HttpStatus.OK);
    }

    //unpublish module
    @GetMapping("/module/unpublish/{id}")
    public @ResponseBody ResponseEntity<?> unpublish(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(moduleService.unpublish(id), HttpStatus.OK);
    }

    //upload photo module
    @PostMapping("/upload/image")
    public ResponseEntity<ImageUploadResponse> uplaodImage(@RequestParam("image") MultipartFile file)
            throws IOException {
        Module lastmod ;
       lastmod = moduleRepository.findTopByOrderByIdDesc();
       lastmod.setImage(ImageUtility.compressImage(file.getBytes()));
       moduleRepository.save(lastmod);
     //   moduleRepository.save(Module.builder()
      //          .image(ImageUtility.compressImage(file.getBytes())).build());
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("Image uploaded successfully: " +
                        file.getOriginalFilename()));
    }
}
