import React, {useEffect} from 'react'
import axios from 'axios'
import './SinglePost.css'

function SinglePost(props) {
    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div className="post">
            <h1><a href={`/${props.id}`}>{props.title}</a></h1>
            <hr />
            <div className="content"  dangerouslySetInnerHTML={ {__html: props.content}} />
        </div>
    )
}

export default SinglePost
