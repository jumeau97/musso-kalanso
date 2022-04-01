package com.example.mussokalanso.mussokalansoBack.Chapitre;

import com.example.mussokalanso.mussokalansoBack.Categorie.Categorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.Files;


@CrossOrigin
@RestController
@RequestMapping(path = "api/mussokalanso")
public class ChapitreControler {
    @Autowired
    ChapitreService chapitreService;


    HttpServletResponse httpServletResponse;

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


    @GetMapping("/download/{filename}")
    public ResponseEntity<Object> downloadFile(@PathVariable("filename") String  filename) throws Exception{

        File file = new File(System.getProperty("user.home")+"/mussokalanso/documents/"+filename);
        InputStreamSource resource = new InputStreamResource(new FileInputStream(file));
        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition",
                String.format("attachment; filename=\"%s\"", file.getName()));
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");

        ResponseEntity<Object> responseEntity = ResponseEntity.ok().headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/pdf")).body(resource);

        return responseEntity;
    }
    
    //download file
   /* @GetMapping(value = "/projects/file/download/{filename}")
    public void getResource(@PathVariable String filename, HttpServletResponse response) throws ResourceNotFoundException, IOException {

        String fileLocation="C:\\Users\\alassane.sanogo\\mussokalanso\\documents\\";//a location that I set, removed logic to make this shorter

               File downloadFile = new File(System.getProperty("user.home")+"/mussokalanso/documents/");


        byte[] isr = Files.readAllBytes(downloadFile.toPath());
        ByteArrayOutputStream out = new ByteArrayOutputStream(isr.length);
        out.write(isr, 0, isr.length);

        response.setContentType("application/pdf");
        // Use 'inline' for preview and 'attachement' for download in browser.
        response.addHeader("Content-Disposition", "inline; filename=" + filename);

        OutputStream os;
        try {
            os = httpServletResponse.getOutputStream();
            out.writeTo(os);
            os.flush();
            os.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    */



    /*HttpHeaders respHeaders = new HttpHeaders();
    respHeaders.setContentLength(isr.length);
    respHeaders.setContentType(new MediaType("text", "json"));
    respHeaders.setCacheControl("must-revalidate, post-check=0, pre-check=0");
    respHeaders.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName);
    return new ResponseEntity<byte[]>(isr, respHeaders, HttpStatus.OK);*/
/*
        }
    }

   */




}
