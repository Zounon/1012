function myFunction() {
  var div = document.getElementById("abc");
  div.addEventListener('mousemove', function(event)
  {
    var x = event.clientX, y = event.clientY;

    div.style.backgroundColor = 'rgb('+((x / 10) - 50)+','+y+',208)';
    console.log(x + "this is x");
    console.log(y + "this is y");

  })

}
window.onload = myFunction;