import { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import styles from './Paginator.module.css'

const Paginator = (props) => {
    const { currentPage, changeCurrentPage, totalItemsCount, pageSize, portionSize = 10 } = props;

    let pagesCount = Math.ceil(
        totalItemsCount / pageSize
    );

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [ currentPortion, setCurrentPortion ] = useState(1)

    let leftPortionBorder = (currentPortion - 1) * portionSize + 1
    let rightPortionBorder = currentPortion * portionSize

    useEffect(() => {
        setCurrentPortion(Math.ceil(currentPage / portionSize))
    }, [currentPage])

    return (
        <div className={styles.pagesNumbers}>
            {leftPortionBorder > 1 &&
                <button onClick={() => setCurrentPortion(currentPortion - 1)}>PrevPage</button>
            }
            {pages
                .filter((page) => page >= leftPortionBorder && page <= rightPortionBorder)
                .map((page) => {
                return (
                    <span
                        key={page}
                        className={
                            page === currentPage ? styles.currentPage : undefined
                        }
                        onClick={() => changeCurrentPage(page)}
                    >
                        {page}
                    </span>
                );
            })}
            {portionCount > currentPortion &&
                <button onClick={() => setCurrentPortion(currentPortion + 1)}>NextPage</button>
            }
        </div>
    )
}

export default Paginator