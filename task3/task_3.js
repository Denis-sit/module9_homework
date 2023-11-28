const input = document.querySelector('.one'),
      button = document.querySelector('button'),
      conatainer = document.querySelector('.container');

function renderImage(url){
    url.forEach(item =>{
        const image = document.createElement('img');
        image.src = item.url;
        conatainer.appendChild(image);
    })
};   

button.addEventListener('click', (e) =>{
    e.preventDefault();
    let number = input.value;

    if(number < 1 || number > 10){
        console.log(`$Число {number} вне диапазона от 1 до 10`);
    }else{
        const getImage = new XMLHttpRequest();
        getImage.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${number}`);
        getImage.send();

        getImage.onload = function(){
            if(getImage.status == 200){
                const req = JSON.parse(getImage.response);
                renderImage(req);
            }else{
                console.error(getImage.status);
            }
        }

    }
    input.value = '';
})