package com.taeho.blog.payload;

import lombok.Data;

@Data
public class JwtRequest {
    private String email;
    private String password;


}
