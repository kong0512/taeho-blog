package com.taeho.blog.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="images")
@Data
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="imagename", nullable = false)
    private String imageName;

    @Column(name="imageuri", nullable = false)
    private String imageURI;
}
