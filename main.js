const quotes = [
    {
        text: 'Quote number one',
        author: 'Author number one'
    }, 
    {
        text: 'Quote number two',
        author: 'Author number two'
    },
    {
        text: 'Quote number three',
        author: 'Author number three'
    },
    {
        text: 'Quote number four',
        author: 'Author number four'
    }
]

const text = document.querySelector('#text');
const author = document.querySelector('#author');
const btn = document.querySelector('#new-quote');


 btn.addEventListener('click', () => {
     let randNum = Math.floor(Math.random() * quotes.length)
    
     text.innerText = quotes[randNum].text;
     author.innerText = quotes[randNum].author;
 
      document.body.style.backgroundColor = randColor();
 })

 function randColor() {
     let red = Math.floor(Math.random() * 256);
     let green = Math.floor(Math.random() * 256);
     let blue = Math.floor(Math.random() * 256);
     let bg = "rgb(" + red + "," + green + "," + blue +")";
     return bg;
 }