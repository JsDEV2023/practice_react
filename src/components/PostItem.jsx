import React from 'react';
import { NavLink } from 'react-router-dom';
import { MyButton } from './UI/button/MyButton';

export const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
            </div>
            <div className="post__btns">
                <MyButton>
                    <NavLink to={`/posts/` + props.post.id}>Открыть</NavLink>
                </MyButton>
                <MyButton
                    onClick={() => {
                        props.del(props.post.id)
                    }}
                >
                    Delete
                </MyButton>
            </div>
        </div>
    )
}