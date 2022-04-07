import { observer } from "mobx-react-lite"
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../index"
import CatalogItem from "./CatalogItem";

const CatalogList = observer(() => {
    const {stuffs} = useContext(Context);

    return ( 
        <Row className="d-flex">
            { (stuffs.IsStuffs) ? 
            
                stuffs.IsStuffs.map(item => {
                    return <CatalogItem key={item.id} item={item} />
                })
             :
                <div>Ничего нет</div>
            }

        </Row>
    )
})

export default CatalogList