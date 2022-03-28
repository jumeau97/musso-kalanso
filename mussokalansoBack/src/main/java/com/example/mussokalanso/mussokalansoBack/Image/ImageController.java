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

  /*  @PostMapping("/upload/image")
    public ResponseEntity<ImageUploadResponse> uplaodImage(@RequestParam("image") MultipartFile file)
            throws IOException {

        imageRepository.save(Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .image(ImageUtility.compressImage(file.getBytes())).build());
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("Image uploaded successfully: " +
                        file.getOriginalFilename()));
    }

   */

    @GetMapping(path = {"/get/image/info/{name}"})
    public Image getImageDetails(@PathVariable("name") String name) throws IOException {

        final Optional<Image> dbImage = imageRepository.findByName(name);

        return Image.builder()
                .name(dbImage.get().getName())
                .type(dbImage.get().getType())
                .image(ImageUtility.decompressImage(dbImage.get().getImage())).build();
    }

    @GetMapping(path = {"/get/image/{name}"})
    public ResponseEntity<byte[]> getImage(@PathVariable("name") String name) throws IOException {

        final Optional<Image> dbImage = imageRepository.findByName(name);

        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageUtility.decompressImage(dbImage.get().getImage()));
    }

    //=========================file upload=============================
    /**
     * Method to upload file
     *
     * @param file
     * @return
     */
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            createDirIfNotExist();

            byte[] bytes = new byte[0];
            bytes = file.getBytes();
            System.out.println("le nom"+file.getOriginalFilename());
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
