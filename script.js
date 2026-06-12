function onClick1(){
    const box1 = document.getElementById('box-1');
    box1.style.backgroundColor="red"
}

function onClick2(){
    const box2 = document.getElementById('box-2');
    box2.style.backgroundColor="blue"
}

function onClick3(){
    const box3 = document.getElementById('box-3');
    box3.style.backgroundColor="green"
}

function onClick4(){
    const box4 = document.getElementById('box-4');
    box4.style.backgroundColor="yellow"
}


const savedName = localStorage.getItem("username");
if (savedName) {
    document.getElementById("greeting").textContent = `Hello, ${savedName}`;
}

document.getElementById("changeBtn").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value.trim();

    if (name !== "") {
        document.getElementById("greeting").textContent = `Hello, ${name}`;
        localStorage.setItem("username", name);
    }
});