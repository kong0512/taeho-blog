package com.taeho.blog.controller;

import com.taeho.blog.payload.ImageRequest;
import com.taeho.blog.payload.PostRequest;
import com.taeho.blog.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/image")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @PostMapping
    public String uploadImage(@RequestPart("data") ImageRequest imageRequest, @RequestPart("file") MultipartFile multipartFile) {
        try {

            imageService.uploadImage(multipartFile, imageRequest.getImageName());

            return "success";
        } catch (IOException e) {
            e.printStackTrace();
            return "failed";
        }
    }
}
