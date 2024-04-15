const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async"), 2000)
      : reject(new Error("error"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("hello");
};

console.log("before");
anotherFn();
console.log("after");

/////////////////////////////////////////////////

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

async function fetchData(){
  const books = await getData();
  console.log(books);
}

fetchData();