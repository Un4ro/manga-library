import React, {useContext} from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import {Dropdown} from "react-bootstrap"

const AuthorBar = observer(() => {
    const {stuffs} = useContext(Context)
    return ( 
        <div>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle variant="outline-dark">{stuffs.selectedAuthor.name || "Автор"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {stuffs.author.map(author =>
                        <Dropdown.Item
                            onClick={() => stuffs.setSelectedAuthor(author)}
                            key={author.id}
                        >
                            {author.name}
                        </Dropdown.Item>
                        )}
                        <Dropdown.Item
                            onClick={() => stuffs.setSelectedAuthor({})}
                        >
                           Очистить
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    )
})

export default AuthorBar