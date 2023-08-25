let a = document.getElementById("timer")
let b = document.getElementById("quoteDisplay");
let c = document.getElementById("result")
let d = document.getElementById("quoteInput");
let e = document.getElementById("submitBtn");
let f = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner")

let timer = 0

function f1() {

    timer += 1;
    a.textContent = timer + " seconds"

}


function f2() {
    spinner.classList.remove("d-none")
    let url = "https://apis.ccbp.in/random-quote"
    let options = {
        method: "Get",
    };
    fetch(url, options).then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none")
            b.textContent = jsonData.content;
        })
}
f2()

function f3()
{
    if (b.textContent === d.value) {
        c.textContent = "You typed in " + a.textContent;
        c.style.color = "Green";
        clearInterval(s);
    } else {
        c.textContent = "You have typed incorrectly";
        c.style.color = "Red";

    }
}
e.addEventListener("click", function() {
    f3();
})
f.addEventListener("click", function() {
    clearInterval(s);
    timer = 0;
    s = setInterval(function() {
        f1()
    }, 1000);
    c.textContent="";
    d.value="";
    f2();
})
 let s = setInterval(function() {
        f1()}, 1000);

d.addEventListener("keyup",function(event)
{
    if(d.value===b.textContent)
    {
        f3();
        setTimeout(function()
        {
            clearInterval(s);
    timer = 0;
    s = setInterval(function() {
        f1()
    }, 1000);
    c.textContent="";
    d.value="";
    f2();
        },5000);
    }
    else if(d.value.length>b.textContent.length)
    {
        f3();
    }
})
