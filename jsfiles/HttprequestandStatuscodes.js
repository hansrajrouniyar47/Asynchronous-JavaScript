
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest


const request = new XMLHttpRequest();

request.addEventListener('readystatechange',() => {

  if(request.readyState === 4 && request.status === 200){
    console.log(request,request.responseText);
  }
  else if(request.readyState === 4){
    console.log('could not fetch the data');
  }


});
request.open('get','https://jsonplaceholder.typicode.com/todos');
request.send();