const equipo1=document.getElementById("e1");
const equipo2=document.getElementById("e2");
const equipo3=document.getElementById("e3");
const equipo4=document.getElementById("e4");
const equipo5=document.getElementById("e5");

const actividad1=document.getElementById("a1");
const actividad2=document.getElementById("a2");
const actividad3=document.getElementById("a3");
const actividad4=document.getElementById("a4");
const actividad5=document.getElementById("a5");

const descripcion1=document.getElementById("d1");
const descripcion2=document.getElementById("d2");
const descripcion3=document.getElementById("d3");
const descripcion4=document.getElementById("d4");
const descripcion5=document.getElementById("d5");

fetch('base.json')
.then(response=> response.json())
.then(data =>{
    equipo1.textContent=data.equipo1;
    equipo2.textContent=data.equipo2;
    equipo3.textContent=data.equipo3;
    equipo4.textContent=data.equipo4;
    equipo5.textContent=data.equipo5;

    actividad1.textContent=data.taller1;
    actividad2.textContent=data.taller2;
    actividad3.textContent=data.taller3;
    actividad4.textContent=data.taller4;
    actividad5.textContent=data.actividades;

    descripcion1.textContent=data.descripcion1;
    descripcion2.textContent=data.descripcion2;
    descripcion3.textContent=data.descripcion3;
    descripcion4.textContent=data.descripcion4;
    descripcion5.textContent=data.descripcion5;
})