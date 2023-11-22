// Задание 1.
const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
const xmlParse = parser.parseFromString(xmlString, 'text/xml');

const list = xmlParse.querySelector('list'),
      student = list.querySelectorAll('student'),
      nameTeg = list.querySelectorAll('name'),
      firstName = list.querySelectorAll('first'),
      secondName = list.querySelectorAll('second'),
      age = list.querySelectorAll('age'),
      prof = list.querySelectorAll('prof'),
      langAttribute = [];
      
nameTeg.forEach(item =>{
    langAttribute.push(item.getAttribute('lang'));
});      

const result = {
    list: [
        {
            name :`${firstName[0].textContent} ${secondName[0].textContent}`,
            age: age[0].textContent,
            prof: prof[0].textContent,
            lang: langAttribute[0]   
        },
        {   
            name : `${firstName[1].textContent} ${secondName[1].textContent}`,
            age: age[1].textContent,
            prof: prof[1].textContent,
            lang: langAttribute[1]   
        }
    ]
};

console.log(result);



      
