import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react"
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap"
import { Context } from "..";
import { fetchGeneres } from "../http/itemsAPI";

export const GenreList = observer(() => {
    const [GenreState, setGenreState] = useState([]);
    const handleChange = (val) => setGenreState(val);
    const {stuffs} = useContext(Context);

    useEffect(() => {
        fetchGeneres().then(data => stuffs.setGenre(data))
    }, [])
    useEffect(() => {
        console.log(GenreState)
    }, [GenreState]);

    return (
        <div>
            <h2>Жанры</h2>
            <ToggleButtonGroup style={{gap:'5px'}} className="d-inline-flex flex-column bd-highlight" type="checkbox" value={GenreState} onChange={handleChange}>
                {stuffs.genre.map(item => {
                    return <ToggleButton key={item.id} variant="outline-info" id={`tbg-btn-${item.id}`} value={item.id}>
                                {item.name}
                           </ToggleButton>
                })}
            </ToggleButtonGroup>
        </div>
       
    )
})