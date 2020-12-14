var a = "20";
var b = ["a", "b", "c"];
var c = function (tableau, item) {
    tableau.push(item);
    console.log(tableau);
};
c(b, a);
c(b, "hello");
