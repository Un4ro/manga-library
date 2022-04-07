import { makeAutoObservable } from "mobx"

export default class StuffStore {
    constructor() {
        this._stuffs = [
        ]
        this._types = [
            {id: 1, name: 'Манга'},
            {id: 2, name: 'Манхва'},
            {id: 3, name: 'Манхуа'},
            {id: 4, name: 'Комикс'}
        ]
        this._genre = [
            {id: 1, name: 'Боевик'},
            {id: 2, name: 'Романтика'},
            {id: 3, name: 'Школа'},
            {id: 4, name: 'Война'},
            {id: 5, name: 'Трагедия'},
            {id: 6, name: 'Сенен'},
        ]
        this._category = [
            {id: 1, name: 'Глупый главный герой'},
            {id: 2, name: 'Система'},
            {id: 3, name: 'Игра'},
            {id: 4, name: 'Поднятие уровней'},
            {id: 5, name: 'Создание деревни'}
        ]
        this._author = [
            {id: 1, name: 'В.В.В'},
            {id: 2, name: 'dsfsefesfdf'},
            {id: 3, name: 'landes'},
            {id: 4, name: 'carnie'},
            {id: 5, name: 'ganses'},
            {id: 6, name: 'ij9j=]k[][lp'},
        ]
        this._posts = []
        this._selectedType = {}
        this._selectedAuthor = {}
        this._selectedGenre = {}
        this._selectedCategory = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
        makeAutoObservable(this)
    }

    
    setPosts(posts) {
        this._posts = posts
    }
    setIsStuffs(stuffs) {
        this._stuffs = stuffs
    }
    setType(types) {
        this._types = types
    }
    setGenre(genre) {
        this._genre = genre
    }
    setAuthor(author) {
        this._author = author
    }
    setCategory(category) {
        this._category = category
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedAuthor(author) {
        this.setPage(1)
        this._selectedAuthor = author
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get IsStuffs() {
        return this._stuffs
    }
    get posts() {
        return this._posts 
    }
    get types() {
        return this._types
    }
    get genre() {
        return this._genre
    }
    get author() {
        return this._author
    }
    get category() {
        return this._category
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedAuthor() {
        return this._selectedAuthor
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
