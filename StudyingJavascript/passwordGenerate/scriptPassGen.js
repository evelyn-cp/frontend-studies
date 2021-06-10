var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%¨&*"
var tmp = ""
function generatepass(plength) {
    tmp = ""
    for(i=0; i<plength; i++) {
        tmp += keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp
}

function populateform(enterlength) {
    document.passGen.output.value = generatepass(enterlength)
}


function mOver(obj) {
    obj.style.backgroundColor = "#789fba";
    obj.style.borderRadius = 0;
}

function mOut(obj) {
    obj.style.backgroundColor = "";
    
}

function mUp() {
    document.getElementById('messageButtonClick').innerHTML = "You've got a new password!";
    
}

/*function mDown() {
    document.getElementById('messageButtonClick').innerHTML = " ";
    
}*/