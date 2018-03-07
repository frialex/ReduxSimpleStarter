export function selectBook(book){
    console.log("Action->selectBook");
    return {
        type : 'BOOK_SELECTED',
        payload: book
    }
}