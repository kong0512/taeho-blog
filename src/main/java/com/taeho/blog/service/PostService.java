package com.taeho.blog.service;

import com.taeho.blog.domain.Post;
import com.taeho.blog.payload.PostRequest;
import com.taeho.blog.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Long writePost(PostRequest postRequest){
        Post post = new Post();
        post.setTitle(postRequest.getTitle());
        post.setContent(postRequest.getContent());

        postRepository.save(post);

        return post.getId();
    }

    public List<Post> getAllPost(){
        return postRepository.findAll();
    }

    public Post getPostById(Long postId){
        return postRepository.findById(postId).get();
    }

    public Long editPost(Long postId){
        return 0L;
    }

    public Boolean deletePost(Long postId){
        postRepository.deleteById(postId);

        return true;
    }


}
