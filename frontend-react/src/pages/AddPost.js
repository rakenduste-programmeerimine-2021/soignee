import AddPostForm from '../components/AddPostForm'

function AddPost() {

    function postSubmitHandler(post) {
        console.log(post);
        fetch('http://localhost:8081/api/posts/create', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {'Content-Type':'application/json'}
        }).then( () => {
            window.location.reload(false)
        });
    }
    
    return (
    <div className="addPostForm">
        <AddPostForm onAddPost={postSubmitHandler}/>
    </div>
    );
};


export default AddPost;