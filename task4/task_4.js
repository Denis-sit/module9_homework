const button = document.querySelector('button'),
      inputs = document.querySelectorAll('input'),
      container = document.querySelector('.container');

function renderImage(url){
    container.textContent = ''; 
    const image = document.createElement('img');
    image.src = url;
    container.appendChild(image);
};  

const requestToTheServer = (num1, num2) =>{
    return fetch(`https://dummyimage.com/${num1}x${num2}/`)
            .then((response) =>{ return renderImage(response.url)})
            .catch((error) => console.error('Упс что то не так', error));
}
    
button.addEventListener('click', async (e) =>{
    e.preventDefault();
    let width = +inputs[0].value,
        height = +inputs[1].value;
    if((typeof(width) !== 'number' ||  isNaN(width) ||width< 100 || width > 300) ||
        (typeof(height) !== 'number' ||  isNaN(height) || height < 100 || height > 300)){
        container.textContent = 'Oдно из чисел вне диапазона от 100 до 300';
    }else{
        await requestToTheServer(width, height);
    }
});  





