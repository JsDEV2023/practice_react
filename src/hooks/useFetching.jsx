import {useState} from 'react'

export const useFetching = (callback) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchPost = async () => {
        try {
            setLoading(true)
            callback()
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return [fetchPost, loading, error]
}