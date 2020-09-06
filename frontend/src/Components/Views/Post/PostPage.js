import React, {useEffect, useState } from 'react'
import axios from 'axios'
import SinglePost from './SinglePost'
import { Container } from 'react-bootstrap'


function PostPage(props) {

    const [Posts, setPosts] = useState([])
    const [Single, setSingle] = useState(false)
    

    useEffect(() => {
        if(props.match.params.postId){
            setSingle(true)
            const postId = props.match.params.postId
            axios.get(`http://localhost:5000/api/post/${postId}`)
            .then(response => {
                console.log(response)
                if(response.data.success){
                    setPosts(response.data.data)
                }
            })
        }else{
            setSingle(false)
            axios.get('http://localhost:5000/api/post')
            .then(response => {
                console.log(response)
                if(response.data.success){
                    setPosts(response.data.data)
                }
                
            })
        }
    }, [])

    return (
        <div>
            <Container>
                {Posts.map((post, index) => (
                    <SinglePost key={index} id={post.id} title={post.title} content={post.content} single={Single} />
                ))}
            </Container>
        </div>
    )
}

export default PostPage
