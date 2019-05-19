import * as React from 'react'
const classNames = require('classnames')

export interface Props {
    active?: boolean
    pageNumber: number,
    handlePage: (page: number) => void
}

export default function PaginationLink({ pageNumber, active = false, handlePage }: Props) {
    const containerClassName = classNames('page-item', { active })

    return (
        <li className={containerClassName} onClick={(e) => { e.preventDefault(); handlePage(pageNumber)}}>
            <a className="page-link" href="">
                {pageNumber}
            </a>
        </li>
    )
}
