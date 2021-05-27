import React from 'react';
import s from './Post.module.css';

const Post = (props: any) => {

    return (
        <div className={s.item1}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" />
            {props.messege}
            <div className={s.likes}>
                <span>like: </span>{props.likes}
            </div>
        </div>
    );
}

export default Post;