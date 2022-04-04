package com.example.mussokalanso.mussokalansoBack.Images;

import java.nio.file.Path;
import java.nio.file.Paths;

public final class FileUtil {
    private FileUtil() {
        // restrict instantiation
    }

    public static final String folderPath =  "C:\\Users\\hp\\mussokalanso\\documents\\";
    public static final Path filePath = Paths.get(folderPath);
}
