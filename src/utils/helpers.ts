export const getAuthor = (authors: string | undefined): string | undefined => {
    const authorsArray = authors?.split(', ')

    if (authorsArray) {
        return `${authorsArray[0]}, ...`
    } else {
        return 'Unknown author'
    }
}