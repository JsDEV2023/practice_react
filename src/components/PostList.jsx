import React from 'react';
import { PostItem } from './PostItem';

export const PostList = ({posts, title, del}) => {
    if (posts.length === 0) {
        return <h1 style={{textAlign: 'center', marginTop: '20px'}}>Нет постов :|</h1>
    }
    return(
        <>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>
        {
            posts.map((post, index) => {
                return <PostItem index={index} post={post} key={post.id} del={del}/>
            })
        }
        </>
    )
}