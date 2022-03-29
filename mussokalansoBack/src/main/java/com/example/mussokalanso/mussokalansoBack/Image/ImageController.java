package com.example.mussokalanso.mussokalansoBack.Image;

import com.example.mussokalanso.mussokalansoBack.Chapitre.Chapitre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class ImageController {

    @Autowired
    ImageRepository imageRepository;


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

    /**
     * Method to get the list of files from the file storage folder.
     *
     * @return file
     */
    @GetMapping("/files")
    public ResponseEntity<String[]> getListFiles() {
        return ResponseEntity.status(HttpStatus.OK)
                .body(new java.io.File(FileUtil.folderPath).list());
    }
}
