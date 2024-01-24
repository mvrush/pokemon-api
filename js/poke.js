console.log('hullo, huh, huh, hullo?');

fetch("https://pokeapi.co/api/v2/pokemon?limit=1") // This will fetch our API data but limited to 1 pokemon result
  .then(res => res.json()) // I used .(dot) notation to append 'then' to 'fetch'. I could write it all as one line. I also used the (res) response function to get the data response, I then used a fat arrow function '=>' to convert the response to 'json' format using the 'json()' funcion.
  //.then(pokeInfo => console.log("This is our fancy pants pokeInfo ->", pokeInfo)) // I then used . notation again to append another 'then' statement in which I told it to take the data, which I've called 'pokeInfo' and send it via arrow function => to a 'console.log()' command that then logs my written text and then the recieved data to the console. I do this to verify that the API has connected and that we have successfullly received data.
  .then((pokeInfo) => { //this uses a fat arrow function and puts the response.json into a variable called 'pokeInfo'
    console.log("This is our fancy pants pokeInfo ->", pokeInfo); // This verifies we have the json object held in the 'pokeInfo' variable.
    document.getElementById("output").innerHTML = pokeInfo.results[0].name; // This sends the pokemon 'name' which is found in index '[0]' of the 'results' section of the json to the id="output" div of the HTML. But it is overwritten by the next line. To see this line output the name in black, just comment out the next line.
    document.getElementById("output").innerHTML = '<h2>' + pokeInfo.results[0].name + '</h2>'; // This sends the pokemon 'name' which is found in index '[0]' of the 'results' section of the json to the id="output" div of the HTML. I surround it with <h2> tags as strings, ie '<h2>' and concatenate the variable 'pokeInfo' with the path to the json data 'results[0].name', ie 'pokeInfo.results[0].name' to apply the CSS for <h2> tags to make it flash red.
  
});

//document.getElementById("output").innerHTML = "<p>This is  my inner HTML</p>" //Test to my output div
  
  //.then(data => document.getElementById("output").innerHTML = data); // Here I output the received data to the DOM but it just shows up as an array of objects there.

//document.getElementById("output").innerHTML = data;