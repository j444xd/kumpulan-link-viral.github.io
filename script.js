var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.name = "sunny";
        icon.classList.remove("moon");
        icon.classList.add("sun");
    }else{
        icon.name = "moon";
        icon.classList.remove("sun");
        icon.classList.add("moon");
    }
}
function myFunction() {
   var element = document.body;
   element.classList.toggle("switch");
}
// Declaring variable to target a div element
const mouseWheel = document.querySelector('.box-scroll');

// Add wheel function
mouseWheel.addEventListener('wheel', function(e) {

    const race = 10; // <= set scroll mouse move the wheels

    if (e.deltaY > 0) // <= Scroll right
        mouseWheel.scrollLeft += race;
    else // Scroll left
        mouseWheel.scrollLeft -= race;
	e.preventDefault();
});

fetch("https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY&ip=" + userIP)

.then(response => response.json())

.then(data => { alert("City: " + data.City + "\nCountry: " + data.country_name);
})

.catch(error => {

alert("Error: + error");

});
