import axios from 'axios';

export const getPosts = async (limit = 10, page) => {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })

        return posts
}

export const getPostId = async (id) => {
    const postId = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    return postId.data
}

export const getPostIdComments = async (id) => {
    const getComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments` )
    return getComments
}