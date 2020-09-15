package com.taeho.blog.service;

import com.taeho.blog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        userRepository.findByEmail(email);
        if(email.equals("admin")) {
            return new User("admin", "$2a$10$QaBiSxs18/G3zQf4QpsgtukWeDxRYJ3Xnl4Cyl3GuLKy4DbJXhm..", new ArrayList<>());
        }else{
            throw new UsernameNotFoundException("User not found with username: " + email);
        }
    }
}
