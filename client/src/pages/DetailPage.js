import { observer } from "mobx-react-lite"
import React, {useContext, useEffect} from "react"
import {Col, Container, Row } from "react-bootstrap"
import { Context } from "../index"
import CatalogList from "../components/Catalog"
import TypeBar from "../components/TypeBar"
import { fetchCategories, fetchGeneres, fetchItems, fetchTypes, fetchAuthors } from "../http/itemsAPI"
import AuthorBar from "../components/AuthorBar"
import Pages from "../components/pages"
import { GenreList } from "../components/GenreList"

const DetailPage = observer(() => {
    const {stuffs} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => stuffs.setType(data))
        fetchCategories().then(data => stuffs.setCategory(data))
        fetchGeneres().then(data => stuffs.setGenre(data))
        fetchItems(null, null, 1, null).then(data => {
            stuffs.setIsStuffs(data.rows)
            stuffs.setTotalCount(data.count)
        })
        fetchAuthors().then(data => stuffs.setAuthor(data))
    }, [])


    useEffect(() => {
        let typeId = stuffs.selectedType.id || null
        let authorId = stuffs.selectedAuthor.id || null
        fetchItems( typeId, authorId, stuffs.page, stuffs.limit).then(data => {
            console.log(typeId, stuffs.selectedAuthor.id, stuffs.page)
            
            stuffs.setIsStuffs(data.rows)
            stuffs.setTotalCount(data.count)
        })
    }, [stuffs, stuffs.page, stuffs.selectedType.id, stuffs.selectedAuthor.id])

    return (
        <Container>
                <Row>
                    <div style={{gap: '6px'}} className="d-flex flex-row justify-content-center bd-highlight">
                        <TypeBar />
                        <AuthorBar />
                        {/* <GenreList /> */}
                    </div>
                    <Row>
                        <CatalogList />
                        <Pages />
                    </Row>
                </Row>
        </Container>
    )
})

export default DetailPage
// where: {
//     authorId: {
//       [Op.or]: [12, 13]
//     }
//   }