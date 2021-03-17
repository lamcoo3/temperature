// let Rectangle = function(length, width){
//     this.length = length;
//     this.width = width;
    
//     this.getArea = function(){
//         return this.length * this.width;
//     }
//     this.getPerimeter = function(){
//         return (this.length + this.width)*2;
//     }
// }

class Temperature {
    constructor(cDegree){
        this.cDegree = cDegree;
    }
    getFahrenheit(){
        return (this.cDegree *1.8) +32;
    }
    getKenvin(){
        return this.cDegree + 273.15;
    }
}
let temperature1 = new Temperature(25);
document.write("Tu do c sang do f la: " + temperature1.getFahrenheit());
document.write("<br/>");
document.write("Tu do c sang do k la: " + temperature1.getKenvin());