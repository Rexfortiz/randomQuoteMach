// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

//console.log(navigator.cookieEnabled); // to check cookie is enabled?


//MANUALLY ADD COOKIES
//document.cookie ="firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//document.cookie ="lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

//console.log(document.cookie)


/*
setCookie("email", "Spongebob@gmail.com", 365);
setCookie("name", "Spongebob", 365);
deleteCookie("firstName");
deleteCookie("lastName");
//deleteCookie("email");
console.log(document.cookie);
console.log(getCookie("email"));
console.log(getCookie("name"));
*/


const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
})

cookieBtn.addEventListener("click", () =>{
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
})
 

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive *24 *60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null

    cArray.forEach(element => {
        if(element.indexOf(name) == 0)
        {
            result = element.substring(name.length + 1)
        }
        
    })
    return result;
}

/*
let x = "thomas Farel"
y = "thom"
console.log(x.indexOf(""))
console.log(x.length)
console.log(x.length-1)
console.log(x.substring(y.length))*/