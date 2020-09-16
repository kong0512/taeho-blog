import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WritePostPage(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
   
    useEffect(() => {
        if(!localStorage.getItem('token')){
            alert('로그인해주세요.')
            props.history.push('/login')
        }
    }, [])

    const onTitleChange = (e) => {
        setTitle(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: title,
            content: content
        }

        const token = 'Bearer ' + localStorage.getItem('token')

        const header = {
            headers: {
                'Authorization': token
            }
        }

        axios.post('http://localhost:5000/api/post', post, header)
            .then(response => {
                console.log(response)
                if(response.data.success){
                    alert('포스트 작성에 성공하였습니다.')

                    props.history.push('/')
                }else{
                    alert('포스트 작성에 실패하였습니다.')
                }
            })

    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="title" placeholder="제목을 입력하세요." onChange={onTitleChange} value={title}></Form.Control>
                </Form.Group>
                <Form.Group controlId="formContent">
                    <Form.Label>내용</Form.Label>
                    <ReactQuill theme="snow" value={content} onChange={setContent} placeholder='내용을 입력하세요.'/>
                </Form.Group>
                <Button variant="primary" onClick={onSubmit}>작성</Button>
                    
            </Form>
        </div>
    )
}

export default WritePostPage
