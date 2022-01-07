// NO arguments
const paint = function (){
    console.log('Paint the wall red')
}
paint();

// Single argument
const paint = function (item){
    console.log("The wall has been painted" + item)
}
paint("green");
paint("pink");

// Multiple arguments
const multiply = function(partA, partB){
    console.log("The", partA, "has been painted", partB)

}
const wall = north;
const color = red;
multiply(wall, color)