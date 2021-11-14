function Car (marca, cc, color) {
    this.marca = marca;
    this.cc = cc;
    this.color = color;
}

var audi = new Car("audi", 1500, "verde");
var golcito = new Car( "wv", 1000, "azul");



var string();


var reverse = function() {
    var reverse = "";
    for( var i = string.length -1; i >= 0; i--) {
        reverse = reverse + string[i];
      } return reverse;
}




function reverse(string) {
    var conteiner = "";
    for (var i = string.length - 1; i >= 0; i--) {
        conteiner = conteiner + string[i];
    } return conteiner;
}