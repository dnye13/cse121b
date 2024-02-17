function searchBooks() {
    const keyword = document.getElementById('keyword').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
        .then(response => response.json())
        .then(data => {
            const booksContainer = document.getElementById('books');
            booksContainer.innerHTML = '';

            if (data.items) {
                const books = data.items;
                books.forEach(book => {
                    const bookInfo = book.volumeInfo;
                    const bookCard = document.createElement('div');
                    bookCard.classList.add('book-card');
                    bookCard.innerHTML = `
                        <img src="${bookInfo.imageLinks?.thumbnail}" alt="${bookInfo.title}">
                        <h3>${bookInfo.title}</h3>
                        <p>Author: ${bookInfo.authors?.join(', ')}</p>
                        <p>Published Date: ${bookInfo.publishedDate}</p>
                    `;
                    booksContainer.appendChild(bookCard);
                });
            } else {
                booksContainer.innerHTML = '<p>No books found</p>';
            }
        })
        .catch(error => console.log('Error fetching data:', error));
}
