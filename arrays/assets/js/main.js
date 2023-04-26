//Array-a uyğun remove funksiyası yazın. Bu method Arrayın sonuncu elementini silsin.
alert()
let obj = {
    arr : [1,3,8,14],
    remove : function () {
        this.arr.length--
    }
}
obj.remove()
console.log(obj.arr);