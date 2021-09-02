const SearchBooks = () => {
    searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    const url = ` http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        // console.log(url);
        .then(res => res.json())
        .then(data => console.log(data));


}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                <img src="${}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        
        `;
        searchResult.appendChild('div');
    })
}