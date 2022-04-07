import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import { Image } from "react-bootstrap";
import { Context } from "..";

export const PostsList = observer(() => {
    const {stuffs} = useContext(Context);

    return (
            <div style={{gap:'5px'}} className="d-inline-flex flex-column align-center bd-highlight">
                {stuffs.posts.map(item => {
                    return (
                    <div style={{borderRadius: '5px', gap: '20px'}} className="bg-light p-3 d-flex flex-row" key={item.id}>
                        <div className="pr-4">
                            <Image style={{borderRadius: '5px'}} width={'200px'} src={process.env.REACT_APP_API_URL + item.img} />
                        </div>
                        <div>
                            <h2 className="mb-3">{item.title}</h2>
                            <p>{item.description}</p>
                            <div style={{float: 'right'}}>{item.createdAt.slice(0, 10).replace(/-/gi, ' ')}</div>

                        </div>
                    </div>)
                })}
            </div>
       
    )
})