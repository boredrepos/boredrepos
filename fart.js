var style = document.createElement('style');
style.innerHTML = '.hide {display: none;}';
document.head.appendChild(style);

var div = document.createElement('div');
var id = document.createAttribute("id");
id.value = 'menu';
div.setAttributeNode(id);

id = document.createAttribute("style");
id.value = 'dysplay:none; position: absolute; z-index: 10; background-color: white;';
div.setAttributeNode(id);
id = document.createAttribute("class");
id.value = 'hide';
div.setAttributeNode(id);
document.body.insertBefore(div,document.getElementById('game-wrapper'));

var div1 = document.createElement('div');
var id = document.createAttribute("id");
id.value = 'submenu';
div1.setAttributeNode(id);

id = document.createAttribute("style");
id.value = 'dysplay:none; position: absolute; left: 8.55%; z-index: 10; background-color: white;';
div1.setAttributeNode(id);
id = document.createAttribute("class");
id.value = 'hide';
div1.setAttributeNode(id);
document.body.insertBefore(div1,document.getElementById('game-wrapper'));

id = document.createElement("p");
id.innerHTML = 'New Tab';
var idea = document.createAttribute('id');
idea.value = 'tab';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Opens new tab on the shad0w.gq database.';
id.setAttributeNode(idea);
div.appendChild(document.createElement('br'));
div.appendChild(document.createElement('br'));
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Membership';
var idea = document.createAttribute('id');
idea.value = 'member';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Gives you a temporary membership';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Escape Battle';
var idea = document.createAttribute('id');
idea.value = 'escape';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Escapes battle. Usually will not complete them, do not use to soon or you can crash Prodigy';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Level 100';
var idea = document.createAttribute('id');
idea.value = 'level';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Makes you level 100';
id.setAttributeNode(idea);
div1.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Skip Tutorial';
var idea = document.createAttribute('id');
idea.value = 'tut';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Skips tutorial at begining, make sure you have a name';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Lots of Gold';
var idea = document.createAttribute('id');
idea.value = 'greed';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Give you a lot of gold';
id.setAttributeNode(idea);
div1.appendChild(id);

id = document.createElement("p");
id.innerHTML = '99 Conjure Cubes';
var idea = document.createAttribute('id');
idea.value = 'conjure';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Gives you 99 conjure cubes, giving more will crash the game';
id.setAttributeNode(idea);
div1.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Get All Items';
var idea = document.createAttribute('id');
idea.value = 'items';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Gets you all the items, ALL OF THEM';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Speed Up x10';
var idea = document.createAttribute('id');
idea.value = 'sped';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Makes your game go fast';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Normal Speed';
var idea = document.createAttribute('id');
idea.value = 'notsped';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Reverses the effects of the last one or does nothing';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Insta Kill';
var idea = document.createAttribute('id');
idea.value = 'instakill';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Insta kills all things in your way';
id.setAttributeNode(idea);
div1.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Get all Pets';
var idea = document.createAttribute('id');
idea.value = 'pets';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Gives you all pets (epics too) after hitting just reset the game';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Stats SubMenu';
var idea = document.createAttribute('id');
idea.value = 'sub';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'A sub menu';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Unlock all Zones';
var idea = document.createAttribute('id');
idea.value = 'zones';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Unlocks all zones';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Max Battle Energy';
var idea = document.createAttribute('id');
idea.value = 'hype';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Hypes up your battle energy';
id.setAttributeNode(idea);
div1.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Get all Furniture';
var idea = document.createAttribute('id');
idea.value = 'furnosh';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Gives you all furniture';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'All Pets Level 100';
var idea = document.createAttribute('id');
idea.value = 'petlevel';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Makes all your pets level 100. Use with get all pets to have every single level 100 pet';
id.setAttributeNode(idea);
div.appendChild(id);

id = document.createElement("p");
id.innerHTML = 'Invincible';
var idea = document.createAttribute('id');
idea.value = 'tryme';
id.setAttributeNode(idea);
var idea = document.createAttribute('title');
idea.value = 'Makes You Invincible';
id.setAttributeNode(idea);
div1.appendChild(id);

var e = document.createElement("input");
var a = document.createTextNode("Cheat Menu");
var body = document.getElementsByTagName("body");

e.appendChild(a);

a = document.createAttribute('style');
a.value = 'position: absolute; z-index: 10; width: 50px; height: 50px;';
e.setAttributeNode(a);

a = document.createAttribute('title');
a.value = "testhtml";
e.setAttributeNode(a);

a = document.createAttribute('type');
a.value = 'image';
e.setAttributeNode(a);

a = document.createAttribute('src');
a.value = 'https://play.prodigygame.com/public/assets/images/ed/@2x/ed-sad@2x.png';
e.setAttributeNode(a);

a = document.createAttribute('id');
a.value = 'cheatButton';

e.setAttributeNode(a);

body[0].insertBefore(e, document.getElementById('game-wrapper'));

document.getElementById("cheatButton").addEventListener("click", disp);
document.getElementById('sub').addEventListener("click", disp1);
document.getElementById('tab').addEventListener("click", tab);

function warn(){
  alert('Disclaimer, this is a test build expect many bugs to be present.');
}

function tab(){
  window.open('https://shad0w.gq/', '_blank');
}


function disp1(){
    document.getElementById('submenu').classList.toggle("hide");
}

function disp(){
    if(document.getElementById('submenu').classList.value != "hide"){
        document.getElementById('submenu').classList.toggle("hide");
    }
    document.getElementById('menu').classList.toggle("hide");

}
