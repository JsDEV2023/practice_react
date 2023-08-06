export const arrayPage = (totalCount, limit) => {
    const ammountPage = Math.ceil(totalCount / limit)
    const array = []
    for (let i = 1; i <= ammountPage; i++) {
        array.push(i)
    }

    return array
}