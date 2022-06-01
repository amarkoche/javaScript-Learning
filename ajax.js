console.log("Welcome to ajax");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log("You have clicked the fetchBtn");
    // In stantiate an xhr object
    const xhr = new XMLHttpRequest();
    // Open the object

    // xhr.open('GET', 'amar.txt', true);

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // used this for post request
    xhr.open('GET', 'https://dummyjson.com/posts', true);
    xhr.getAllResponseHeaders('Content-type', 'application/json');  

    // true mean asyncorous yni ki block nhi hona chahiye
    
    // What to do on progess: isko ap chaho to used bhi kar skte ho ya nhi bhi kar skte ho.
    // what to do onh progess(Optinal)
    xhr.onprogress = function(){
        console.log("On Progress");
        // we can used here for loader and spiner 
        // loader and spiner ke liye hum used kar skte he
    }

    // XMLHTTPRequest.readyState

    // 0	UNSENT	Client has been created. open() not called yet.
    // 1	OPENED	open() has been called.
    // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    // 3	LOADING	Downloading; responseText holds partial data.
    // 4	DONE	The operation is complete.

    // xhr.onreadystatechange = function(){
    //     console.log('ready state is ', xhr.readyState);
    // }

    // agar sb kuch taya ho jaye to ek function ko run kar do 
    // What to do when response is ready
    xhr.onload = function (){
        // 200 is the respons code of http: 
        // 200 respons code respons ok
        // 404 not fount 
        // 403 bad request
        // 400 page not found
        // 500 Internal server 
        // 503 service unavelable
        if(this.status === 200){ 
            console.log(this.responseText);
        } else{
            console.log("Some error occured");
        }       
    }

    // send the request
    // xhr.send();

    // this used for post request
    params = `{"name":"test1","salary":"123","age":"23"}`;  
    xhr.send(params);
}
 
// POST means  URL dege our kuch data bhi dege our us data ke mutabik muje responce dena. in post you can send big data with no limit
// GET means URL dege our hume bada dena is URL me kay he. in get request don't send password because of sequrity is the resion so tha you should do this thing very cearfuly


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log("You have clicked the pop Handler");
    // In stantiate an xhr object
    const xhr = new XMLHttpRequest();
    // Open the object

    // xhr.open('GET', 'amar.txt', true);

    xhr.open('GET', 'https://dummyjson.com/products', true);

    xhr.onload = function (){
       
        if(this.status === 200){ 
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for(key in obj){
                str += `<li>${obj[key] } </li>`;
            }
            list.innerHTML = str;
             

        } else{
            console.log("Some error occured");
        }       
    }

    // send the request
    xhr.send();

    console.log("We are done fetching employee!");
    
}
