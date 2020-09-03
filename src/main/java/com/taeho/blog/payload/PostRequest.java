package com.taeho.blog.payload;

import lombok.Data;

@Data
public class PostRequest {
    private String title;
    private String content;
}
