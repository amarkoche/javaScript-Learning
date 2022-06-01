console.log("Welcome to fetch AIP");
/* 
The Fetch API.
The Fetch API provides a fetch() method defined on the window object, wich you can use to perform requests.
This method returns a Promise that you can use to retrieve the response of the request.
*/






// // Button with id myBtn
// let myBtn = document.getElementById('myBtn');

// // div with id content  

// let content = document.getElementById('content');

// // function getData(){
// //     console.log("Started getDate")
// //     url = "amar.txt";
// //     fetch(url).then((response)=>{
// //         console.log("Inside first then");
// //         return response.text();
// //     }).then((data)=>{
// //         console.log("Inside second then");
// //         console.log(data);
// //     })
// // }

// function getData(){
//     console.log("Started getDate")
//     url = "https://wordsapiv1.p.mashape.com/words/example";   
//     params = {
//         method: 'post',
//         header: {
//             'Constent-Type' : 'application/json'
//         },

//         body: JSON.stringify(data)
//     }
    

//     fetch(url, params).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })


//     // url = "http://dummy.restapiexample.com/api/v1/create";
   
//     // data = '{"name":"harry347485","salary":"123", "age":"23"}'
//     // params = {
//     //     method: 'post',
//     //     header: {
//     //         'Constent-Type' : 'application/json'
//     //     },
        
//     //     body: data
//     // }
    

//     // fetch(url, params).then(response=> response.json())
//     // .then(data => console.log(data)
//     // )
// }
// console.log("Before running getData");
// getData()

// console.log("After running getData");




// this method returns a promise that you can to retrive 
// the response of the request
// The Fetch API Provides a javascript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. 



function getmyData(){
    url=`amar.txt`;
    fetch(url)
    .then((response) =>{
        console.log("Inside first then");
        return response.text();
    })
    .then((data) =>{
        console.log("Inside second then");
        console.log(data);
    })
    .catch( (error) => {
        console.log(`The Error: ${error}`);
    });
} 
getmyData()


// function getcoviddata(indexs){
//     // url =`https://api.covid19api.com/summary`
//     fetch('https://api.covid19api.com/summary')
//     .then( (apidata) => {
//         console.log(apidata);
//         return apidata.json();
//     })
//     .then((actualdata) => {
    
//     const mydata = actualdata.Countries['${indexs}'];

//     // document.getElementById('apiindia').innerHTML = `The name of the country is ${mydata.Country}. 
//     // The TotalConfired cases here is 
//     // ${mydata.TotalConfirmed} and the totalDeaths cases here is ${mydata.TotalDeaths} and finally the TotalRecovered cases here is ${mydata.TotalRecovered}`;

//     console.log(`The name of the country is ${mydata.Country}. 
//     The TotalConfired cases here is 
//     ${mydata.TotalConfirmed} and the totalDeaths cases here is ${mydata.TotalDeaths} and finally the TotalRecovered cases here is ${mydata.TotalRecovered}`);


//     })
//     .catch( (error) => {
//         console.log(`The Error: ${error}`);
//     });

// }

// getcoviddata(200);
