export const getAuthor = (authors: string): string => {
    const authorsArray = authors.split(', ')

    if (authorsArray.length === 1) {
        return `${authorsArray[0]}`
    } else if (authorsArray.length > 1) {
        return `${authorsArray[0]}, ...`
    } else {
        return 'Unknown author'
    }
}

export const getPrice = (price: string): string => {
    return price === '$0.00' ? 'Free' : price
}

export const validateSearchValue = (searchValue: string): string => {
    return searchValue.trim().toLowerCase()
}