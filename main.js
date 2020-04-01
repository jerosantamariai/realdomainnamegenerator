var pronoun = ['the','our']; 
var adj = ['great', 'big' ]; 
var noun = ['jogger','racoon'];

let ul = document.getElementById("list");

for (let i=0; i<pronoun.length; i++){
    for(let j=0; j<adj.length; j++){
        for(let k=0; k<noun.length; k++){
            let result = document.createTextNode(pronoun[i]+adj[j]+noun[k]+".com");
            let li = document.createElement("LI");
            li.appendChild(result);
            ul.appendChild(li);
        }
    }
}

