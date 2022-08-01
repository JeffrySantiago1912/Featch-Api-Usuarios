let url = "https://jsonplaceholder.typicode.com/users"; //Url de la api que contiene los datos
fetch(url) //Solicitud a la Url
.then(response => response.json())  //Se resuelve la promesa, al obtener la respuesta la pasa a una funcion json
 .then(data =>  mostrarData(data))   //console.log(data)) - Leemos el objeto "data" y lo mostramos por consola para ver los datos
  .catch(error => console.log(error)) //Si hay un error esta linea de codigo atrapa el error.


  const mostrarData = (data) =>{
    console.log(data) //Para ver que nos esta trayendo//
    let body = "";

    for(let i = 0; i < data.length; i++){ //Este for va a ir dibujando en el tbody

        //Va a ir iterando cada elemento del array, el api es un array con 10 elementos
         body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td></tr>`
                 
                  
    }

    document.getElementById("data").innerHTML = body

  }

 