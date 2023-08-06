import React, {useEffect, useState} from 'react';
import { getPostId } from '../API/Posts';
import { getPostIdComments } from '../API/Posts';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { Loader } from '../components/UI/loader/Loader';

export const PageIdPost = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostId, postIdLoading, postIdErrors] = useFetching(async () => {
        const postId = await getPostId(params.id)
        setPost(postId)
    })
    const [fetchCommentsPost, loadingCommentsPost, errorCommentsPost] = useFetching(async () => {
        const postComments = await getPostIdComments(params.id)
        setComments(postComments.data)
    })

    useEffect(() => {
        fetchPostId()
        fetchCommentsPost()
    }, [])

    console.log(comments)

    return (
        <div>
            {
                postIdLoading || loadingCommentsPost ? 
                <Loader />
                :
                postIdErrors || errorCommentsPost ||
                <div className='post__id'>
                    <h1>Информация о посте #{params.id}</h1>
                    <div>
                        <span><b>Заголовок поста: </b> {post.title}</span>
                    </div>
                    <div>
                        <span><b>Текст поста: </b> {post.body}</span>
                    </div>
                    <div className='post__comments'>
                        <h4>Comments:</h4>
                        <ul>
                            {
                                comments.map(user => {
                                    return  <li>
                                                <p><b>Имя пользователя: </b> {user.name}</p>
                                                <p><b>Email: </b> {user.email}</p>
                                                <p><b>Описание комментария: </b> {user.body}</p>
                                            </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}