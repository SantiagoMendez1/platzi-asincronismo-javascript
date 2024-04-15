const promise = new Promise((resolve, reject) => {
  resolve("some of text");
});
///////////////////////////////////////////////////////////////
//Las promesas se encargan de recibir dos funciones, la primera es la funcion con la cual se va a resolver la promesa(resolve),
//la segunda es el rechazo de la promesa(reject)
const cows = 15;
const coutCows = new Promise((resolve, reject) => {
  console.log("entro a la promesa para resolverla");
  if (cows > 10) {
    resolve(`we have ${cows} cows on the farm`);
    console.log("promesa resuelta");
  } else {
    console.log("Se rechazo la promesa");
    reject("There ir no cows on the farm");
  }
});

//para ejecutar la promesa se hace uso de la instancia de la promesa, la funcion then(), recibel el callback que ejecutara en el resolve
//la promesa cuando se cumpla, el catch es el callback que ejecutara la funcion cuan la promesa sea rechazada
//finally hace referencia a una ejecucion que se efectuara cuado la promesa ya sea resuelta
coutCows
  .then((result) => {
    console.log("ejecucion de la funcion despues de solucionar la promesa");
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("finally"));

////////////////////////////////////////////////////////////

const data = {
  title: "New Product",
  price: 10,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

function getData() {
  return new Promise((resolve, reject) => {
    if (data.lenght === 0) {
      reject(new Error("Data is empty"));
    }
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

getData()
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message));
