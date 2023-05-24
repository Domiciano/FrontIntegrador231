let json = window.localStorage.getItem("course");
const course = JSON.parse(json);

console.log(course);

const title = document.getElementById('title');
title.textContent = course.name;
