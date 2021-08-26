var cheese = 30;
var bacon = 50;
var lettuce =20;
var tomato =15
var sum= 30;
const menu= [cheese,bacon,lettuce,tomato ]
function add(input)
{
    switch(input) {
        case "cheese":
          sum= sum+cheese;
          document.getElementById("one").innerText ="cheese";
          break;
        case "bacon":
         sum=sum+bacon;
         document.getElementById("2").innerText ="bacon";
          break;
        case "lettuce":
         sum=sum+lettuce;
         document.getElementById("3").innerText ="lettuce";
          break;
        case "tomato":
         sum=sum+tomato;
         document.getElementById("4").innerText ="tomato";
          break;
          case "onion":
         sum=sum+tomato;
         document.getElementById("5").innerText ="onion";
          break;
          
        default: document.getElementById("p").innerText ="price: "+ sum;
        
      }
      document.getElementById("p").innerText ="price: "+ sum;
      
}
function remove(input)
{
    switch(input) {
        case "cheese":
          sum= sum-cheese;
          document.getElementById("one");
          break;
        case "bacon":
         sum=sum-bacon;
          break;
          case "lettuce":
         sum=sum-lettuce;
          break;
          case "tomato":
         sum=sum-tomato;
          break;
          
        default: document.getElementById("p").innerText = sum;
    }
      document.getElementById("p").innerText ="price: "+ sum;
      
      
}



