import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props: any) => {
    
    let postItem = props.posts.map((p: any) => (<Post messege={p.messege} likes={p.like} />));

    return (
        <div className={s.postModule}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols={100}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postItem}
        </div>

    );
}

export default MyPosts;