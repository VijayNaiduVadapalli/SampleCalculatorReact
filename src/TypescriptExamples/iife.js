(function(){
    comsole.log("this is vijay");
})();

//commented in typescript file example

(function (){
    var userName="Mark";
    function showName(name)
    {
        console.log("customer Name"+name);
    }
   showName(userName);
})();


var userName1="Mark";

(function(name){
    function showName(name)  //inner function
    {
        console.log("Customer Name"+name);
    }
    showName(name)    //inner function

})(userName1)  //passing global userName to inner function by calling outer function 


