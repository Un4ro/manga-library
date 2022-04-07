import React, {useContext, useEffect} from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import {Dropdown} from "react-bootstrap"
import { configure, toJS } from "mobx"

configure({
    useProxies: "never"
})

const TypeBar = observer(() => {
    const {stuffs} = useContext(Context)
    return ( 
        <div>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle variant="outline-dark">{stuffs.selectedType.name || "Тип издания"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {stuffs.types.map(type =>
                        <Dropdown.Item
                            onClick={() => stuffs.setSelectedType( type )}
                            key={type.id}
                        >
                            {type.name}
                        </Dropdown.Item>
                        )}
                        <Dropdown.Item
                            onClick={() => stuffs.setSelectedType({})}
                        >
                           Очистить
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    )
})

export default TypeBar