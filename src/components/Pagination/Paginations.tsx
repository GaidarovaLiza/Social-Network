import React from "react";
import {useState} from "react";
import s from './Pagination.module.css'

type PropsType = {
    pages: Array<number>
    currentPage: number;
    pageSize: number;
    totalItemsCount: number;
    onPageChanged: (pageNumber: number) => void;
};

export const Pagination: React.FC<PropsType> = ({
                                                    pages,
                                                    currentPage,
                                                    pageSize,
                                                    totalItemsCount,
                                                    onPageChanged,
                                                }) => {
    const [portionNumber, setPortionNumber] = useState(1);
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const portionSize = 10;
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const onNextPortionHandler = () => {
        setPortionNumber(portionNumber + 1);
    };

    const onPrevPortionHandler = () => {
        setPortionNumber(portionNumber - 1);
    };

    console.log(pages)

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