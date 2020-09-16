import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'


function Login(props) {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    useEffect(() => {
        if(localStorage.getItem('token')){
            alert('로그아웃되었습니다.')
            localStorage.removeItem('token')
            props.history.push('/')
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        const loginData = {
            email: email,
            password: password
        }

    

        axios.post('http://localhost:5000/api/user/auth', loginData)
        .then(response => {
            if(response.status === 200){
                localStorage.setItem('token', response.data.token)
                props.history.push('/')
            } 
            
        }).catch((e) => {
            alert('로그인 에러')
            setemail('')
            setpassword('')
        })

    }

    const onEmailChange = (e) =>{
        setemail(e.currentTarget.value)
    }

    const onPasswordChange = (e) =>{
        setpassword(e.currentTarget.value)
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="email" placeholder="이메일을 입력하세요." onChange={onEmailChange} value={email}></Form.Control>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호를 입력하세요." onChange={onPasswordChange} value={password}></Form.Control>
                </Form.Group>
               
                <Button variant="primary" onClick={onSubmit}>로그인</Button>
                    
            </Form>
        </div>
    )
}

export default Login
