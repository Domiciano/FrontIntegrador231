const nameInput = document.getElementById('nameInput');
const programInput = document.getElementById('programInput');
const teacherInput = document.getElementById('teacherInput');
const regBtn = document.getElementById('regBtn');

const cursosContainer = document.getElementById('cursosContainer');


regBtn.addEventListener('click',  async function(e){
    e.preventDefault();
    let course = {
        name: nameInput.value,
        program: programInput.value,
        teacher: {
            id:teacherInput.value
        }
    };
    let json = JSON.stringify(course);
    await fetch("https://i2thub.icesi.edu.co:5443/bannerapi/courses/create", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: json
      });
    getCourses();

});









//GET Request
async function getCourses(){
    cursosContainer.innerHTML = '';
    let response = await fetch("https://i2thub.icesi.edu.co:5443/bannerapi/courses/all");
    let json = await response.json();
    console.log(json);
    json.forEach(obj =>{
        console.log(obj);
        let card = new Card(obj).render();
        console.log(card);
        cursosContainer.appendChild(card);
    });
}

async function postTeacher(){
    //10 segundos
    console.log("POST");
}

getCourses();


