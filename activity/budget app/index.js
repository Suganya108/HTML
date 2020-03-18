function add() {
    var total = document.getElementById("mybudget").value;
    document.getElementById("b").innerHTML = "$ " + total;

    var sum = p.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    document.getElementById("c").innerHTML = "$ " + sum;
    var rem = parseInt(total) - sum;
    document.getElementById("d").innerHTML = "$ " + rem;

}
const p = [];

function newElement() {
    var li = document.createElement("li");
    var product = document.getElementById("t").value;
    var t1 = document.createTextNode(product);
    li.appendChild(t1);

    if (product === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    var li = document.createElement("li");
    var productprice = document.getElementById("price").value;
    p.push(productprice);
    var t2 = document.createTextNode(productprice);
    li.appendChild(t2);
    if (productprice === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL2").appendChild(li);
    }

}
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        console.log("Delete Task...");

        var listItem = this.parentNode;
        var ul = listItem.parentNode;
        ul.removeChild(listItem);

    }
}