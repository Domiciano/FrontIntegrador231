class Card{

    constructor(course){
        this.course = course;
    }

    render(){
        let container = document.createElement('div'); //<div></div>
        container.classList.add("card"); //<div class="card"></div>
        container.classList.add("coursecard");//<div class="card coursecard"></div>

        let img = document.createElement('img');
        img.setAttribute("src", "https://www.pv-magazine-latam.com/wp-content/uploads/sites/3/2019/03/Captura-de-pantalla-2019-03-11-a-las-17.47.41.png");
        img.classList.add('card-img-top');
        
        let body = document.createElement('div'); //<div></div>
        body.classList.add('card-body');

        let title = document.createElement('h5'); //<h5></h5>
        title.classList.add('card-title');

        let p = document.createElement('p'); //<p></p>
        p.classList.add('card-text');

        let a = document.createElement('a'); //<a></a>
        a.classList.add('btn');
        a.classList.add('btn-primary');

        body.appendChild(title); //<div></div>
        body.appendChild(p); 
        body.appendChild(a);
        container.appendChild(img);
        container.appendChild(body);

        //Datos
        p.textContent = this.course.teacher.name;
        title.textContent = this.course.name;
        a.textContent = 'Detalles';


        
        a.addEventListener('click', e => {
            e.preventDefault();
            //Objeto -> String
            let json = JSON.stringify(this.course);
            console.log(json);
            window.localStorage.setItem('course', json);
            //Me permite navegar desde JS
            location.href = "course.html";
        });


        return container;
    }

}