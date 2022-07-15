//document.querySelector('button').addEventListener('click', addBook)
document.querySelector('button').addEventListener('click', addItem)

document.querySelector('#austinsBooks').innerText = localStorage.getItem('Austins Books')

function addItem(){
    let currentUser = document.querySelector('#users').value
    let bookName = document.querySelector('#bookName').value
    let bookRating = document.querySelector('#bookRating').value
    let bookInfo = `${bookName} ${': '} ${bookRating}`
    
    let ul = document.getElementById("austinsBooks");
    let li = document.createElement("li");
    li.setAttribute('id', bookInfo);
    li.appendChild(document.createTextNode(bookInfo));
    ul.appendChild(li);
    if(currentUser === 'Austin'){
        if(!localStorage.getItem('Austins Books')){
            localStorage.setItem('book name', [`${bookName}`])
            localStorage.setItem('book rating', [`${bookRating}`])
            localStorage.setItem('Austins Books', [`${bookInfo}`])
          }
        else{
            let books = localStorage.getItem('Austins Books') + bookInfo
            localStorage.setItem('Austins Books', books)
          }
}

/*function addBook(){
    let currentUser = document.querySelector('#users').value
    let bookName = document.querySelector('#bookName').value
    let bookRating = document.querySelector('#bookRating').value
    let bookInfo = `${bookName} ${': '} ${bookRating}`
    if(currentUser === 'Austin'){
        if(!localStorage.getItem('books')){
            localStorage.setItem('books', `${bookInfo}`)
          }
        else{
            let books = localStorage.getItem('books') + " , " + bookInfo;
          }
        //document.querySelector('li').innerText = `${bookInfo}`
    }
    document.querySelector('#austinsBooks').innerText = localStorage.getItem('books')
    */
}