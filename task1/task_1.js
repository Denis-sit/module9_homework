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

const xmlTable = xmlParse.querySelector('list'),
      students = xmlTable.querySelectorAll('student'),
      result = {};
      result.list = [];

students.forEach((item) =>{
  let nameTeg = item.querySelector('name'),
    firstName = nameTeg.querySelector('first'),
    secondName = nameTeg.querySelector('second'),
    age = item.querySelector('age'),
    prof = item.querySelector('prof');

  const student = {
    name :`${firstName.textContent} ${secondName.textContent}`,
    age: age.textContent,
    prof: prof.textContent,
    lang: nameTeg.getAttribute('lang')  
  }

  result.list.push(student);
  
});

console.log(result);




      
