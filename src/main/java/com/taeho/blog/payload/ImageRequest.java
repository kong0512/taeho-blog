package com.taeho.blog.payload;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ImageRequest {
    private String imageName;
}
