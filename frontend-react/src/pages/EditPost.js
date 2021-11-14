import EditPostForm from '../components/EditPostForm'
import { useEffect, useState } from 'react';

function EditPost(props) {

    const [post, setPost] = useState(null);

    useEffect(() => {
        const postId = window.location.href.split('/editpost/')[1];
        fetch('http://localhost:8081/api/posts/' + postId).then(res => {
        return res.json();
    }).then(data => {
        setPost(data);
    })
    },[])
    
    if (!post){
        return "Loading...";
    }

    return(
        // <EditPostForm onEditPost={postEditHandler}/>
        <EditPostForm dataAboutPost={post} onEditPost={postEditHandler}/>
    );   
    
    function postEditHandler(post){
        //e.preventDefault();
        //console.log(post);
        const postId = window.location.href.split('/editpost/')[1];
        const postSubmitted = {
            "content": post.content,
            "user": post.user,
        }
        
        fetch('http://localhost:8081/api/posts/update/' + postId, {
            method: 'PUT',
            body: JSON.stringify(postSubmitted),
            headers: {'Content-Type':'application/json'}
        }).then(window.location.reload(false));

        
    }
    
}

export default EditPost;