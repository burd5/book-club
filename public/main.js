
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=aQK2Kn49cQGK8DTBwpiMpclKLjgnfmPY`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          document.querySelector('.cover1').src = data.results.books[0].book_image
          document.querySelector('.title1').innerHTML = `Title: ${toTitleCase(data.results.books[0].title)}`
          document.querySelector('.author1').innerHTML = `Author(s): ${data.results.books[0].author}`

          document.querySelector('.cover2').src = data.results.books[1].book_image
          document.querySelector('.title2').innerHTML = `Title: ${data.results.books[1].title}`
          document.querySelector('.author2').innerHTML = `Author(s): ${data.results.books[1].author}`

          document.querySelector('.cover3').src = data.results.books[2].book_image
          document.querySelector('.title3').innerHTML = `Title: ${data.results.books[2].title}`
          document.querySelector('.author3').innerHTML = `Author(s): ${data.results.books[2].author}`

          document.querySelector('.cover4').src = data.results.books[3].book_image
          document.querySelector('.title4').innerHTML = `Title: ${data.results.books[3].title}`
          document.querySelector('.author4').innerHTML = `Author(s): ${data.results.books[3].author}`

          document.querySelector('.cover5').src = data.results.books[4].book_image
          document.querySelector('.title5').innerHTML = `Title: ${data.results.books[4].title}`
          document.querySelector('.author5').innerHTML = `Author(s): ${data.results.books[4].author}`

          document.querySelector('.cover6').src = data.results.books[5].book_image
          document.querySelector('.title6').innerHTML = `Title: ${data.results.books[5].title}`
          document.querySelector('.author6').innerHTML = `Author(s): ${data.results.books[5].author}`

          document.querySelector('.cover7').src = data.results.books[6].book_image
          document.querySelector('.title7').innerHTML = `Title: ${data.results.books[6].title}`
          document.querySelector('.author7').innerHTML = `Author(s): ${data.results.books[6].author}`

          document.querySelector('.cover8').src = data.results.books[7].book_image
          document.querySelector('.title8').innerHTML = `Title: ${data.results.books[7].title}`
          document.querySelector('.author8').innerHTML = `Author(s): ${data.results.books[7].author}`

          document.querySelector('.cover9').src = data.results.books[8].book_image
          document.querySelector('.title9').innerHTML = `Title: ${data.results.books[8].title}`
          document.querySelector('.author9').innerHTML = `Author(s): ${data.results.books[8].author}`
        })
        
        const resultBoxes = document.querySelectorAll('.results')
        const covers = document.querySelectorAll('.cover')
        const buttons = document.querySelectorAll('button')
        for(box of resultBoxes){
          box.style.border = '3px solid black'
          box.style.borderRadius = '5px'
        }
        for(cover of covers){
          cover.style.display = 'inline'
          cover.style.padding = '5px'
        }
        for(button of buttons){
          button.style.display = 'inline'
        }
/*
          document.querySelector('.cover3').src = data.items[2].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title3').innerHTML = `Title: ${data.items[2].volumeInfo.title}`
          document.querySelector('.author3').innerHTML = `Author(s): ${data.items[2].volumeInfo.authors}`

          document.querySelector('.cover4').src = data.items[3].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title4').innerHTML = `Title: ${data.items[3].volumeInfo.title}`
          document.querySelector('.author4').innerHTML = `Author(s): ${data.items[3].volumeInfo.authors}`

          document.querySelector('.cover5').src = data.items[4].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title5').innerHTML = `Title: ${data.items[4].volumeInfo.title}`
          document.querySelector('.author5').innerHTML = `Author(s): ${data.items[4].volumeInfo.authors}`

          document.querySelector('.cover6').src = data.items[5].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title6').innerHTML = `Title: ${data.items[5].volumeInfo.title}`
          document.querySelector('.author6').innerHTML = `Author(s): ${data.items[5].volumeInfo.authors}`

          document.querySelector('.cover7').src = data.items[6].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title7').innerHTML = `Title: ${data.items[6].volumeInfo.title}`
          document.querySelector('.author7').innerHTML = `Author(s): ${data.items[6].volumeInfo.authors}`

          document.querySelector('.cover8').src = data.items[7].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title8').innerHTML = `Title: ${data.items[7].volumeInfo.title}`
          document.querySelector('.author8').innerHTML = `Author(s): ${data.items[7].volumeInfo.authors}`

          document.querySelector('.cover9').src = data.items[8].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title9').innerHTML = `Title: ${data.items[8].volumeInfo.title}`
          document.querySelector('.author9').innerHTML = `Author(s): ${data.items[8].volumeInfo.authors}`
        });
*/

document.querySelector('button').addEventListener('click', searchAPI)

function searchAPI(){
  let title = document.querySelector('#bookName').value
  const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`

fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          document.querySelector('.cover1').src = data.items[0].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title1').innerHTML = `Title: ${data.items[0].volumeInfo.title}`
          document.querySelector('.author1').innerHTML = `Author(s): ${data.items[0].volumeInfo.authors}`

          document.querySelector('.cover2').src = data.items[1].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title2').innerHTML = `Title: ${data.items[1].volumeInfo.title}`
          document.querySelector('.author2').innerHTML = `Author(s): ${data.items[1].volumeInfo.authors}`

          document.querySelector('.cover3').src = data.items[2].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title3').innerHTML = `Title: ${data.items[2].volumeInfo.title}`
          document.querySelector('.author3').innerHTML = `Author(s): ${data.items[2].volumeInfo.authors}`

          document.querySelector('.cover4').src = data.items[3].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title4').innerHTML = `Title: ${data.items[3].volumeInfo.title}`
          document.querySelector('.author4').innerHTML = `Author(s): ${data.items[3].volumeInfo.authors}`

          document.querySelector('.cover5').src = data.items[4].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title5').innerHTML = `Title: ${data.items[4].volumeInfo.title}`
          document.querySelector('.author5').innerHTML = `Author(s): ${data.items[4].volumeInfo.authors}`

          document.querySelector('.cover6').src = data.items[5].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title6').innerHTML = `Title: ${data.items[5].volumeInfo.title}`
          document.querySelector('.author6').innerHTML = `Author(s): ${data.items[5].volumeInfo.authors}`

          document.querySelector('.cover7').src = data.items[6].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title7').innerHTML = `Title: ${data.items[6].volumeInfo.title}`
          document.querySelector('.author7').innerHTML = `Author(s): ${data.items[6].volumeInfo.authors}`

          document.querySelector('.cover8').src = data.items[7].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title8').innerHTML = `Title: ${data.items[7].volumeInfo.title}`
          document.querySelector('.author8').innerHTML = `Author(s): ${data.items[7].volumeInfo.authors}`

          document.querySelector('.cover9').src = data.items[8].volumeInfo.imageLinks.smallThumbnail
          document.querySelector('.title9').innerHTML = `Title: ${data.items[8].volumeInfo.title}`
          document.querySelector('.author9').innerHTML = `Author(s): ${data.items[8].volumeInfo.authors}`


          const resultBoxes = document.querySelectorAll('.results')
          const covers = document.querySelectorAll('.cover')
          const buttons = document.querySelectorAll('button')
          for(box of resultBoxes){
            box.style.border = '3px solid black'
            box.style.borderRadius = '5px'
          }
          for(cover of covers){
            cover.style.display = 'inline'
            cover.style.padding = '5px'
          }
          for(button of buttons){
            button.style.display = 'inline'
          }
        })
      }