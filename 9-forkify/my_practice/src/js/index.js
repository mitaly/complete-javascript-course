import axios from 'axios';

async function callSearch(item) {
    try{
        const result = await axios(`https://forkify-api.herokuapp.com/api/search?q=${item}`);
        console.log(result);
    }catch(error) {
        console.log(`Error occured: ${error}`);
    }
}

callSearch('Tomato');

// using promise
/*function makeCallToSearch(item) {
    return fetch(`https://forkify-api.herokuapp.com/api/search?q=${item}`);
}

makeCallToSearch('pizza')
    .then(result => {
        return result.json();
    })
    .then(data => {
        console.log(data)
    });*/

// using async await
/*async function callToSearch(item) {
    try{
        const result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${item}`);
        const data = await result.json();
        console.log(data);
    }catch(error) {
        alert(error);
    }
}

callToSearch('pizza');
*/

