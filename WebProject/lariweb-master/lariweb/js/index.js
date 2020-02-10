class Shoes {
  constructor(color,type,id) {
    this.color = color;
    this.type = type;
    this.id = id;
  }
}
class Bottom {
  constructor(color,type,id) {
    this.color = color;
    this.type = type;
    this.id = id;
    
  }
}
class Top{
  constructor(color,type,id) {
    this.color = color;
    this.type = type;
    this.id = id;
  }
}

var shoes = [];
var bottom = [];
var top1 = [];

var bottom_amount = 0;
var top_amount = 0;
var shoes_amount = 0;

var wearingS = 0;
var wearingB = 0;
var wearingT = 0;
var btn = [];
function isExistShoes(indice)
{
    for(i=0;i<shoes_amount;i++)
        {
            if(i == indice-1 && shoes[indice-1].type != "")
                {
                    return 1;
                }
        }
    
    return -1;
}
function isExistBottom(indice)
{
    for(i=0;i<bottom_amount;i++)
        {
            if(i == indice-1 && bottom[i].type != "")
                {
                    return 1;
                }
        }
    
    return -1;
}
function isExistTop(indice)
{
    for(i=0;i<top_amount;i++)
        {
            if(i == indice-1 && top1[i].type != "")
                {
                    return 1;
                }
        }
    
    return -1;
}
function panelChanger(panel){
    
    btn[1] = document.getElementById("form_add_shoes").classList;
    btn[2] = document.getElementById("form_add_bottom").classList;
    btn[3] = document.getElementById("form_add_top").classList;
    btn[4] = document.getElementById("wardrobe_shoes").classList;
    btn[5] = document.getElementById("wardrobe_bottom").classList;
    btn[6] = document.getElementById("wardrobe_top").classList;
    btn[7] = document.getElementById("remove_shoes").classList;
    btn[8] = document.getElementById("remove_bottom").classList;
    btn[9] = document.getElementById("remove_top").classList;
    btn[10] = document.getElementById("look_shoes").classList;
    btn[11] = document.getElementById("look_bottom").classList;
    btn[12] = document.getElementById("look_top").classList;
    btn[13] = document.getElementById("wearing").classList;
   
    for(i=1;i<=13;i++)
        {       
            btn[i].add("hidden");
        }
    if(panel == "add")
        {
        btn[1].remove("hidden");
        btn[2].remove("hidden");
        btn[3].remove("hidden");
        }
    else if (panel == "wardrobe_view")
        {
            showWardrobe();
            btn[4].remove("hidden");
            btn[5].remove("hidden");
            btn[6].remove("hidden");
        }
    else if (panel =="remove")
        {
            btn[7].remove("hidden");
            btn[8].remove("hidden");
            btn[9].remove("hidden");
        }
    else if (panel == "wear")
        {
            btn[10].remove("hidden");
            btn[11].remove("hidden");
            btn[12].remove("hidden");
            btn[13].remove("hidden");    
        }
}
function wear_shoes()
{
    var form = document.getElementById("look_shoes");
    var id = form.ID_SHOES_1.value;
   
    if(id == "")
        {
         resetFormulario();
            alert("Type a valid ID! ");
            return ;
        }
    else if (isExistShoes(id) == -1)
        {
            resetFormulario();
            alert("There's no shoes with this ID!");
            return ; 
        }
    else if (wearingS == 1)
        {
            resetFormulario();
            alert("You are already wearing shoes!");
            return ;
        }
    wearingS = 1;
    document.getElementById("wearing").innerHTML += ('<h2>' + "Shoes:" + '</h2>' + '<ul style="border-style: solid; border-                 color:#540c49;">' + '<li>'+'<h2>' + "TYPE: "+ shoes[id-1].type + '</h2>' + '</li>'+
                   '<li>' +'<h5>' + " Color: " + shoes[id-1].color + '</h5>' + '</li>'
                   + '<li>' +'<h5>' + " SHOES ID: " + shoes[id-1].id + '</h5>' + '</li>'
                    + '</ul>');
    resetFormulario();
}
function wear_bottom()
{
    var form = document.getElementById("look_bottom");
    var id = form.ID_BOTTOM_1.value;
   
    if(id == "")
        {
            resetFormulario();
            alert("Type a valid ID! ");
            return ;
        }
    if(isExistBottom(id) == -1)
        {
            resetFormulario();
            alert("There's no bottom with this ID!");
            return;
    
        }
    else if (wearingB == 1)
        {
            resetFormulario();
            alert("You are already wearing a bottom piece!");
            return ;
        }
    wearingB = 1;
    document.getElementById("wearing").innerHTML += ('<h2>' + "Bottom:" + '</h2>' + '<ul style="border-style: solid; border-                 color:#540c49;">' + '<li>'+'<h2>' + "TYPE: "+ bottom[id-1].type + '</h2>' + '</li>'+
                   '<li>' +'<h5>' + " Color: " + bottom[id-1].color + '</h5>' + '</li>'
                   + '<li>' +'<h5>' + " Bottom ID: " + bottom[id-1].id + '</h5>' + '</li>'
                    + '</ul>');
    resetFormulario();
}

function takeOfClothes()
{
    document.getElementById("wearing").innerHTML = ('<h1>' + "WEARING" + '</h1>' +
            '<button id="takeOfButton" style="border-color: #540c49;" onClick="takeOfClothes()">' + "Take off clothes"+ '</button>');
    wearingB = 0;
    wearingS = 0;
    wearingT = 0;
    resetFormulario();
}
function wear_top()
{
    var form = document.getElementById("look_top");
    var id = form.ID_TOP_1.value;
    if(id == "")
        {
         resetFormulario();
            alert("Type a valid ID! ");
            return ;
        }
    if(isExistTop(id) == -1)
        {
            resetFormulario();
            alert("There's no top with this ID!");
            return;
    
        }
    else if (wearingT == 1)
        {
            resetFormulario();
            alert("You are already wearing a top piece!");
            return ;
        }
    wearingT = 1;
    document.getElementById("wearing").innerHTML += ('<h2>' + "Top:" + '</h2>' + '<ul style="border-style: solid; border-                 color:#540c49;">' + '<li>'+'<h2>' + "TYPE: "+ top1[id-1].type + '</h2>' + '</li>'+
                   '<li>' +'<h5>' + " Color: " + top1[id-1].color + '</h5>' + '</li>'
                   + '<li>' +'<h5>' + " Top ID: " + top1[id-1].id + '</h5>' + '</li>'
                    + '</ul>');
    resetFormulario();
}
function remove_shoes()
{
    var form_shoes = document.getElementById("remove_shoes");
   
    var id_shoes = form_shoes.ID_SHOES.value;
    
    if(id_shoes == "")
        {
            resetFormulario();
            alert("Type a valid ID!");
            return ;
        }
   
    if(isExistShoes(id_shoes) == -1)
        {
            resetFormulario();
            alert("There's no shoes with this ID!");
            return;
        }
    
    shoes[id_shoes-1].type = "";
    
    alert("A shoes has been removed !");
    resetFormulario();
     
}
function remove_bottom()
{
    var form_bottom = document.getElementById("remove_bottom");
   
    var id_bottom = form_bottom.ID_BOTTOM.value;
    
    if(id_bottom == "")
        {
            resetFormulario();
            alert("Type a valid ID!");
            return ;
        }
    if(isExistBottom(id_bottom) == -1)
        {
            resetFormulario();
            alert("There's no bottom with this ID!");
            return;
    
        }
    
    bottom[id_bottom-1].type = "";
    
    alert("A bottom has been removed !");
    resetFormulario();
     
}
function remove_top()
{
    var form_top = document.getElementById("remove_top");
   
    var id_top = form_top.ID_TOP.value;
    
    if(id_top == "")
        {
            resetFormulario();
            alert("Type a valid ID!");
            return ;
        }
    if(isExistBottom(id_top) == -1)
        {
            resetFormulario();
            alert("There's no top with this ID!");
            return;
    
        }
    
    top1[id_top-1].type = "";
    
    alert("A top has been removed !");
    resetFormulario();
     
}

function addShoes()
{
    
    var form = document.getElementById("form_add_shoes");
    var color = form.COLOR_SHOES.value;
    var type = form.TYPE_SHOES.value;
    
    if(color == "" || type == ""){
        alert("Fill all fields!");
        resetFormulario();
        return ;
    }
    
    shoes[shoes_amount] = new Object();
    shoes[shoes_amount] = new Shoes(color,type,shoes_amount+1);
    
    alert("New shoes has been added!");
    shoes_amount++;
    resetFormulario();
}
function showWardrobe()
{
    document.getElementById('wardrobe_shoes').innerHTML = ('<h2 style="text-align: center;">' + "SHOES" + '</h2>');
    for(i=0;i<shoes_amount;i++)
        {
          
            if(shoes[i]!=null && shoes[i].type != "")
                { 
                    document.getElementById('wardrobe_shoes').innerHTML += 
                 ('<ul style="border-style: solid; border-color:#540c49;">' + '<li>'+'<h2>' + "TYPE: "+ shoes[i].type + '</h2>' + '</li>'+
                   '<li>' +'<h5>' + " Color: " + shoes[i].color + '</h5>' + '</li>'
                   + '<li>' +'<h5>' + " SHOES ID: " + shoes[i].id + '</h5>' + '</li>'
                    + '</ul>');
                }
        }
    document.getElementById('wardrobe_bottom').innerHTML = ('<h2 style="text-align: center;">' + "BOTTOM" + '</h2>');
    for(i=0;i<bottom_amount;i++)
        {
          
            if(bottom[i]!=null && bottom[i].type != "")
                { 
                    document.getElementById('wardrobe_bottom').innerHTML += 
                 ('<ul style="border-style: solid; border-color:#540c49;">' + '<li>'+'<h2>' + "TYPE: "+ bottom[i].type + '</h2>' + '</li>'+
                   '<li>' +'<h5>' + " Color: " + bottom[i].color + '</h5>' + '</li>'
                  + '<li>' +'<h5>' + "BOTTOM ID: " + bottom[i].id + '</h5>' + '</li>'
                    + '</ul>');
                }
        }
    document.getElementById('wardrobe_top').innerHTML = ('<h2 style="text-align: center;">' + "TOP" + '</h2>');
    for(i=0;i<top_amount;i++)
        {
          
            if(top1[i]!=null && top1[i].type != "")
                { 
                    document.getElementById('wardrobe_top').innerHTML += 
                 ('<ul style="border-style: solid; border-color:#540c49;">' + '<li>'+'<h2>' + "TYPE: "+ top1[i].type + '</h2>' + '</li>'+
                   '<li>' +'<h5>' + " Color: " + top1[i].color + '</h5>' + '</li>'
                  + '<li>' +'<h5>' + " TOP ID: " + top1[i].id + '</h5>' + '</li>'
                    + '</ul>');
                }
        }
    resetFormulario();
}
function addTop()
{
    var form = document.getElementById("form_add_top");
    var color = form.COLOR_TOP.value;
    var type = form.TYPE_TOP.value;
    
    if(color == "" || type == ""){
        alert("Fill all fields!");
        resetFormulario();
        return ;
    }
    
    top1[top_amount] = new Object();
    top1[top_amount] = new Top(color,type,top_amount+1);
    
    alert("A new top has been added!");
    top_amount++;
    resetFormulario();   
}
function addBottom(){
    var form = document.getElementById("form_add_bottom");
    var color = form.COLOR_BOTTOM.value;
    var type = form.TYPE_BOTTOM.value;
    
    if(color == "" || type == ""){
        alert("Fill all fields!");
        resetFormulario();
        return ;
    }
    
    bottom[bottom_amount] = new Object();
    bottom[bottom_amount] = new Bottom(color,type,bottom_amount+1);
    alert("A new bottom has been added!");
    bottom_amount++;
    resetFormulario();
}
    
function resetFormulario(){
 
  document.getElementById("COLOR_SHOES").value = "";
  document.getElementById("TYPE_SHOES").value = "";
  document.getElementById("COLOR_BOTTOM").value = "";
  document.getElementById("TYPE_BOTTOM").value = "";
  document.getElementById("COLOR_TOP").value = "";
  document.getElementById("TYPE_TOP").value = "";
  document.getElementById("ID_SHOES").value = "";
  document.getElementById("ID_BOTTOM").value = "";
  document.getElementById("ID_TOP").value = "";
 document.getElementById("ID_SHOES_1").value = "";
  document.getElementById("ID_BOTTOM_1").value = "";
  document.getElementById("ID_TOP_1").value = "";
  
     
}