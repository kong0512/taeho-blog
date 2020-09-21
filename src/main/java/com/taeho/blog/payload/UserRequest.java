package com.taeho.blog.payload;

import lombok.Data;

@Data
public class UserRequest {
    private String email;
    private String nickname;
    private String password;
}
