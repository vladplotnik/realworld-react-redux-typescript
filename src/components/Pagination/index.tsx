import * as React from 'react';
import { range } from 'lodash-es';
import PaginationLink from './PaginationLink';

export interface Props {
    activePage: number,
    totalPages: number,
    handlePage: (page: number) => void
}

export default function Pagination({ activePage, totalPages, handlePage }: Props) {
    const navLinks = range(1, totalPages).map((pageNumber: number) => {
        const isActivePage = pageNumber === activePage

        return (
            <PaginationLink
                key={pageNumber}
                active={isActivePage}
                pageNumber={pageNumber}
                handlePage={handlePage}
            />
        )
    })

    return (
        <nav>
            <ul className="pagination">{navLinks}</ul>
        </nav>
    )
}
