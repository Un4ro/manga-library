import { $authHost, $host } from "./index"


export const createStuff = async (stuffs) => {
    const {data} = await $authHost.post('api/stuff', stuffs)
    return data
}

export const createAuthor = async (author) => {
    const {data} = await $authHost.post('api/author', author)
    return data
}
export const fetchAuthors = async () => {
    const {data} = await $host.get('api/author')
    return data
}

export const createGenre = async (genre) => {
    const {data} = await $authHost.post('api/genre', genre)
    return data
}

export const fetchGeneres = async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const createPosts = async (post) => {
    const {data} = await $authHost.post('api/posts', post)
    return data
}

export const fetchPosts = async () => {
    const {data} = await $host.get('api/posts')
    return data
}

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const fetchOneItem = async (id) => {
    const {data} = await $host.get('api/stuff/' + id)
    return data
}

export const fetchItems = async (typeId, authorId, page, limit = 5) => {
    const {data} = await $host.get('api/stuff', {
            params: {typeId, authorId, page, limit}
        })
    return data
}