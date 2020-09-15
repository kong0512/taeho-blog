package com.taeho.blog.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.taeho.blog.domain.Image;
import com.taeho.blog.repository.ImageRepository;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@Transactional
public class ImageService {
    @Autowired
    private AmazonS3 awsS3;

    @Autowired
    private ImageRepository imageRepository;

    @Value("${aws.s3.bucket}")
    private String bucket;

    public boolean uploadImage(MultipartFile image, String imageName) throws IOException
    {
        String extension = FilenameUtils.getExtension(image.getOriginalFilename());
        String finalImageName = imageName + "." + extension;

        awsS3.putObject(new PutObjectRequest(bucket, finalImageName, image.getInputStream(), null)
                .withCannedAcl(CannedAccessControlList.PublicRead));

        String imageURI = awsS3.getUrl(bucket, finalImageName).toString();

        addImageData(imageName, extension, imageURI);

        return true;
    }

    public void addImageData(String imageName, String imageType, String imageURI){
        Image image = new Image();
        image.setImageName(imageName);
        image.setImageType(imageType);
        image.setImageURI(imageURI);

        imageRepository.save(image);
    }

    public boolean deleteImage(Long id) {
        Image image = imageRepository.findById(id).get();
        String key = image.getImageName() + "." + image.getImageType();

        awsS3.deleteObject(bucket, key);

        imageRepository.deleteById(id);

        return true;
    }
}
