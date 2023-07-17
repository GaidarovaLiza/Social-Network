import React from "react";
import {useState} from "react";
import s from './Pagination.module.css'

type PropsType = {
    currentPage: number;
    pageSize: number;
    totalItemsCount: number;
    onPageChanged: (pageNumber: number) => void;
};

export const Pagination: React.FC<PropsType> = ({
                                                    currentPage,
                                                    pageSize,
                                                    totalItemsCount,
                                                    onPageChanged,
                                                }) => {
    const [portionNumber, setPortionNumber] = useState(1);
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionSize = 10;
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const onNextPortionHandler = () => {
        setPortionNumber(portionNumber + 1);
    };

    const onPrevPortionHandler = () => {
        setPortionNumber(portionNumber - 1);
    };

    return (
        <div>
            {portionNumber > 1 && (
                <button onClick={onPrevPortionHandler}>Prev</button>
            )}
            {pages
                .filter(
                    (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
                )
                .map((page) => (
                    <span
                        key={page}
                        className={currentPage === page ? s.selected : s.pageNumber}
                        onClick={() => onPageChanged(page)}
                    >
            {page}{" "}
          </span>
                ))}
            {portionNumber < pagesCount / portionSize && (
                <button onClick={onNextPortionHandler}>Next</button>
            )}
        </div>
    );
};