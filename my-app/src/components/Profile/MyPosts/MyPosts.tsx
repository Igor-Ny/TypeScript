import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = React.memo((props: any) => {


    let postItem = props.posts.map((p: any) => (<Post messege={p.message} likes={p.likes} />));

    let newPostElement: any = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let onAddNewPost = (value: any) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={s.postModule}>
            <h3>My posts</h3>
            <div>
                <AddReduxPost onSubmit={onAddNewPost} />
            </div>
            {postItem}
        </div>

    );
})

let maxLength10 = maxLengthCreator(10)

const AddPost = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' cols={100} placeholder="Send post"
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}


const AddReduxPost = reduxForm({ form: 'addPost' })(AddPost)

export default MyPosts;