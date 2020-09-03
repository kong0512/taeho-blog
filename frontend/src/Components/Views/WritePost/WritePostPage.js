import React, {useState} from 'react'
import axios from 'axios'

function WritePostPage(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const onTitleChange = (e) => {
        setTitle(e.currentTarget.value)
    }

    const onContentChange = (e) => {
        setContent(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: title,
            content: content
        }

        axios.post('http://localhost:5000/api/post', post)
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
            <form onSubmit={onSubmit}>
                <label>제목</label>
                <input onChange={onTitleChange} value={title} />
                <br/>
                <label>내용</label>
                <textarea onChange={onContentChange} value={content} />
                <br/>
                <button onClick={onSubmit}>작성</button>
                    
            </form>
        </div>
    )
}

export default WritePostPage
