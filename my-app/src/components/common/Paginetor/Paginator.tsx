import React, { useState } from 'react';
import style from './Paginator.module.css';
import cn from 'classnames'

export const Paginator = (props: any) => {
    debugger
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rigthPortionPageNumber = portionNumber * props.portionSize;

    return <div className={style.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [style.selectedPage]: props.currentPage === p
                }, style.pageNumber)}
                    key={p}
                    onClick={(e) => { props.onPageChanged(p); }}>
                    {p} </span>
            })}

        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>

}
