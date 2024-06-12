// ADD NEW ITEM TO END OF LIST & ADD NEW ITEM START OF LIST
// referenced ppt, hierarchy & information about HTML DOM: append child/insertBefore()/setAttribute()/getElement/outerHTML in w3schools
var list = document.querySelector("ul");
var newItem = document.createElement("li");
newItem.textContent = "cream";
list.append(newItem);

var newItem = document.createElement("li");
newItem.textContent = "kale";
list.insertBefore(newItem, list.firstChild)

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// CSS h2 span
//acquiring length
var num = document.getElementsByTagName("li").length;
document.getElementsByTagName("h2")[0].innerHTML += '<span>' + num  + '</span>';

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var el = document.getElementsByTagName("li");
for (let i = 0; i < el.length; i++) {
    el[i].setAttribute('class', 'cool');
}



