package com.taeho.blog.repository;

import com.taeho.blog.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface PostRepository extends JpaRepository<Post, Long> {
    public List<Post> findAllByOrderByIdDesc();
}
