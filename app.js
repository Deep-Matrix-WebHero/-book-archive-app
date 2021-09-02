const inputField = document.getElementById('input-field');
const errorHandler = document.getElementById('error');
const bookContainer = document.getElementById('book-container');
const searchTotal = document.getElementById('total-search');



const searchBook = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    inputField.value = '';
    if (inputText === '') {
        errorHandler.innerText = `No Data Found!please write you bookname!`;
        errorHandler.style.textAlign = "center";
        errorHandler.style.color = "red";
        errorHandler.style.fontWeight = "bold";
        errorHandler.style.fontSize = "30px";

    } else {
        errorHandler.innerText = '';
        const url = `https://openlibrary.org/search.json?q=${inputText}`;
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => displayBook(data))
    }



};

const displayBook = data => {
    console.log(data);
    const books = data.docs.slice(0, 29);
    searchTotal.innerHTML = `<h2 class="text-center text-danger">Total Result:${data.numFound}</h2>`;
    const bookContainer = document.getElementById('book-container');
    bookContainer.textContent = '';
    if (books.length === 0) {
        errorHandler.innerText = 'data not found!';
        inputText.style.textAlign = "center";
        inputText.style.color = "red";
        inputText.style.fontWeight = "bold";
        inputText.style.fontSize = "30px";
        return;
    } else {

        errorHandler.innerText = '';

    }
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div  class="card">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-100 h-100" alt="book image">
        <div class="card-body">
            <h5 >Book Name:${book.title}</h5>
            <h5 >Author Name:${book.author_name}</h5>
            <h5 >First Publising Year:${book.first_publish_year}</h5>
            <h5 >Book Publisher:${book.publisher}</h5>
        </div>
    </div >
        
        `;
        bookContainer.appendChild(div);
    })

}