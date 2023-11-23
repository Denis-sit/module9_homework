const button = document.querySelector('button'),
      inputs = document.querySelectorAll('input'),
      container = document.querySelector('.container');

// Если есть необходимость проверить работу ы браузере, то необходимо подключить скрипт а файле index.html

const requestToTheServer = (page, limit) =>{
    return fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`)
            .then((response) =>{ return response.json()})
            .then((data) =>{return renderImage(data)})
            .catch(() => container.textContent = `Не удалось связаться с сервером`);
}
  
requestToTheServer(localStorage.getItem('page'), localStorage.getItem('limit'))

function renderImage(data){
    const urlArr = data.map(obj => obj.url);
    container.textContent = ''; 
    urlArr.forEach(url => {
        const image = document.createElement('img');
        image.style.width = '200px';
        image.src = url;
        container.appendChild(image); 
    });
};  

button.addEventListener('click', async (e) =>{
    e.preventDefault();
        let page = +inputs[0].value,
            limit = +inputs[1].value;

        localStorage.setItem('page', +inputs[0].value);
        localStorage.setItem('limit', +inputs[1].value);


    if((typeof(page) !== 'number' ||  isNaN(page) || page < 1 || page > 10) &&
            (typeof(limit) !== 'number' || isNaN(limit) || limit < 1 || limit > 10)){
        container.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }else if(typeof(page) !== 'number' ||  isNaN(page) || page < 1 || page > 10){
        container.textContent = `Номер страницы вне диапазона от 1 до 10`;
    }else if(typeof(limit) !== 'number' || isNaN(limit) || limit < 1 || limit > 10){
        container.textContent = `Лимит вне диапазона от 1 до 10`;
    }
    else{
        await requestToTheServer(page, limit);
    }
});  
