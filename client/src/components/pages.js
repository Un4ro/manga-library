import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {stuffs} = useContext(Context)
    const pageCount = Math.ceil(stuffs.totalCount / stuffs.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3 justify-content-center">
            {pages.map(page =>
                <Pagination.Item 

                    key={page}
                    active={stuffs.page === page}
                    onClick={() => stuffs.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;
