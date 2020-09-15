package com.taeho.blog.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email" , nullable = false, unique = true)
    private String email;

    @Column(name="nickname", nullable = false)
    private String nickname;

    @Column(name="password", nullable = false)
    private String password;

}
