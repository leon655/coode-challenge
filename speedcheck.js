function checkspeed() [
    const speed =parseFloat(prompt("enter the car's speed:"));

    if(isNaN(speed)|| speed <0){
        console.log("invalid input.please enter a valid speed.");
        return;

    }
const speedlimit = 70;
const kmperdemerit =5;

if (speed <= speedlimit) {
    console.log("ok");
    return;
}
const demeritpoints = math.floor((speed -speedlimit) /kmperDemerit);
if (demeritpoints >12) {
    console.log("license suspended");
} else{
    console.log('points: ${demeritpoints}');

}
}
checkspeed();

}