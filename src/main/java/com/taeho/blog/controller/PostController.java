package com.taeho.blog.controller;

import com.taeho.blog.domain.Post;
import com.taeho.blog.payload.PostRequest;
import com.taeho.blog.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping
    @ResponseBody
    public Map<String, Object> writePost(@RequestBody PostRequest postRequest){
        Long id = postService.writePost(postRequest);

        Map<String, Object> resultMap = new HashMap<>();

        if(id != null){
            resultMap.put("success", true);
            resultMap.put("id", id);
        }
        else{
            resultMap.put("success", false);
            resultMap.put("id", id);
        }

        return resultMap;
    }

    @GetMapping
    @ResponseBody
    public List<Post> getAllPost(){
        return postService.getAllPost();
    }

    @GetMapping("/{postId}")
    public Post getPostById(@PathVariable Long postId){
        return postService.getPostById(postId);
    }

    @PutMapping("/{postId}")
    public Map<String, Object> editPost(@PathVariable Long postId){
        Map<String, Object> resultMap = new HashMap<>();

        Long id = postService.editPost(postId);

        if(id != null){
            resultMap.put("success", true);
            resultMap.put("id", id);
        }
        else{
            resultMap.put("success", false);
            resultMap.put("id", id);
        }

        return resultMap;
    }

    @DeleteMapping("/{postId}")
    public Map<String, Object> deletePost(@PathVariable Long postId){
        Map<String, Object> resultMap = new HashMap<>();

        Boolean result = postService.deletePost(postId);

        resultMap.put("success", result);

        return resultMap;
    }
}
