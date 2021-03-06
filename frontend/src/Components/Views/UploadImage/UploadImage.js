import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'

function UploadImage(props) {
    const [imageName, setImageName] = useState("")
    const [image, setImage] = useState(undefined)
    const [uImageName, setuImageName] = useState("")

    useEffect(() => {
        if(!localStorage.getItem('token')){
            alert('로그인해주세요.')
            props.history.push('/login')
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        if(imageName === ""){
            alert('이미지명을 입력하세요.');
        }
        else if(!image){
            alert('이미지를 업로드하세요.');
        }
        else{
            let formData = new FormData();

            const imageData = {
                'imageName': imageName
            }

            formData.append("data",  
            new Blob([JSON.stringify(imageData)], {
                type: 'application/json'
            }));
            formData.append("file", image);
            

            // const config = {
            //     headers: {
            //         'content-type': 'multipart/form-data'
            //     }
            // }

            const token = 'Bearer ' + localStorage.getItem('token')

            const header = {
                headers: {
                    'Authorization': token
                }
            }

            console.log(formData)
         
            
            axios.post('http://localhost:5000/api/image', formData, header)
            .then(response => {
                alert('업로드가 완료되었습니다.')
                props.history.push('/')
            })

        }

       

    }

    const onNameChange = (e) => {
        setImageName(e.currentTarget.value)
    }

    const onImageChange = (e) => {
        setImage(e.currentTarget.files[0])
        setuImageName(e.currentTarget.value)
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>이미지명</Form.Label>
                    <Form.Control type="name" placeholder="이미지 이름을 입력하세요." onChange={onNameChange} value={imageName}></Form.Control>
                </Form.Group>
                <Form.Group controleId="formImage">
                    <Form.File id="image" onChange={onImageChange} value={uImageName} label="이미지 업로드" />
                </Form.Group>
                <Button variant="primary" onClick={onSubmit}>업로드</Button>
                    
            </Form>
        </div>
    )
}

export default UploadImage
