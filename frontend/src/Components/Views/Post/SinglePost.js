import React, {useEffect} from 'react'
import axios from 'axios'

function SinglePost(props) {
    useEffect(() => {
        console.log(props)
    }, [])

    const deletePost = (e) => {
        e.preventDefault()

        if(window.confirm('이 포스트를 삭제하시겠습니까?')){
            axios.delete(`http://localhost:5000/api/post/${props.id}`)
                .then(response => {
                    if(response.data.success){
                        alert('삭제에 성공하였습니다.')
                        props.history.push('/')
                    }
                    else{
                        alert('삭제에 실패하였습니다.')
                    }
                })
        }else{

        }
    }


    return (
        <div>
            <h2><a href={`/${props.id}`}>{props.title}</a></h2>
            <p>{props.content}</p>
            {props.single &&
             <button onClick={deletePost}>삭제</button>
            }
        </div>
    )
}

export default SinglePost
