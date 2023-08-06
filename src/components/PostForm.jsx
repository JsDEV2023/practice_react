import React, {useState} from 'react';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

export const PostForm = ({create, setVisible}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
          id: Date.now(),
          title: post.title,
          body: post.body
        }
        create(newPost)
        setPost({title: '', body:''})
    }

    return (
        <form>
            <MyInput 
                type="text" 
                placeholder='Название поста' 
                onChange={(e) => setPost({...post, title: e.target.value})} 
                value={post.title}
            />
            <MyInput 
                type="text" 
                placeholder='Описание поста' 
                onChange={(e) => setPost({...post, body: e.target.value})} 
                value={post.body}
            />
            <MyButton 
                onClick={(e) => {
                    addNewPost(e)
                    setVisible(false)
                }
                }
            >
                Добавить пост
            </MyButton>
      </form>
    )
}