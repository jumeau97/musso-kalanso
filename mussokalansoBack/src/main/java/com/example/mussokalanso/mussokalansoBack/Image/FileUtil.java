package com.example.mussokalanso.mussokalansoBack.Image;

import java.nio.file.Path;
import java.nio.file.Paths;

public final class FileUtil {
    private FileUtil() {
        // restrict instantiation
    }

    public static final String folderPath =  "C:\\Users\\alassane.sanogo\\mussokalanso\\images\\";
    public static final Path filePath = Paths.get(folderPath);
}
