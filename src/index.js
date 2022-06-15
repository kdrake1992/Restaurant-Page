// Where all the content will go
const content = document.getElementById('content');

// Initial page launch
function initial() {
    content.innerHTML =
        `<div class="navbar">

        <img src="/Assets/shaka.svg" alt="Shaka" id="shaka">
        <h2>Aloha!</h2>

        <ol class="menu">
            <li><button class="menubuttons active">Home</button></li>
            <li><button class="menubuttons">Menu</button></li>
            <li><button class="menubuttons">Contact</button></li>
        </ol>

        <h2>Social Media</h2>

        <ol class="icons">
            <li><a href="https://www.facebook.com"><img src="/Assets/facebook.png" alt="Facebook" class="smallicons"></a></li>
            <li><a href="https://www.twitter.com"><img src="/Assets/twitter.png" alt="Twitter" class="smallicons"></a></li>
            <li><a href="https://www.instagram.com"><img src="/Assets/isnta.png" alt="Instagram" class="smallicons"></a></li>
        </ol>
    </div>

    <div id="main" class="showcase">
        <h1>Kamaʻāina Cafe</h1>
        <img src="/Assets/mainpage.jpeg" alt="Kamaainu" id="showcasepicture">

        <div id="description">
            <h2>Foods Made from Aloha</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem numquam saepe excepturi, distinctio totam pariatur itaque temporibus odit ipsa aliquam? Nobis consequuntur et quas, dolores eveniet ipsam quo, non dicta saepe in dolorem totam maiores voluptas iure, accusamus iste error odio magnam sapiente reprehenderit deleniti nemo ullam? Nisi, repellat?</p>
        </div> 
    </div>

    <div class="footer">
        Made by Kevin Drake for The Odin Project
    </div>`
}

// Page start
initial();
const show = document.getElementById("main")

function home() {
    show.innerHTML = ` 
        <div id="main" class="showcase">
        <h1>Kamaʻāina Cafe</h1>
        <img src="/Assets/mainpage.jpeg" alt="Kamaainu" id="showcasepicture">

        <div id="description">
            <h2>Foods Made from Aloha</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem numquam saepe excepturi, distinctio totam pariatur itaque temporibus odit ipsa aliquam? Nobis consequuntur et quas, dolores eveniet ipsam quo, non dicta saepe in dolorem totam maiores voluptas iure, accusamus iste error odio magnam sapiente reprehenderit deleniti nemo ullam? Nisi, repellat?</p>
        </div> 
    </div>
    `
    return show;
}

function menu() {
    show.innerHTML = `
        Work in Progress
    `
    return show;
}

function contact() {

    show.innerHTML = `
        <div class="container">
        <form action="#">
            <label for="firstN">First Name*</label>
            <input type="text" id="firstN" placeholder="First Name" required>

            <label for="lastN">Last Name*</label>
            <input type="text" id="lastN" placeholder="Last Name" required>

            <label for="email">Email*</label>
            <input type="email" name="email" id="email" placeholder="john@abc.com" required>

            <label for="phone">Phone Number</label>
            <input type="number" name="phone" id="phone" placeholder="123-345-6789">

            <label for="message">Message</label>
            <textarea name="message" id="message" 
            placeholder="Write a message(Optional)"
            cols="50" rows="10"></textarea>

            <input type="submit" value="Submit" id="submit">
        </form>
    </div>
    `
    return show;
}

// Button controls
const buttons = document.getElementsByClassName("menubuttons");

for(const button of buttons) {
    button.addEventListener('click', e=> {
        for(const button of buttons) {
            button.classList.remove("active");
        }
        e.target.classList.add("active");

        if(e.target.innerHTML === "Home") {
            show.append(home());
        }
        else if(e.target.innerHTML === "Menu") {
            show.append(menu());
        }        
        else if(e.target.innerHTML === "Contact") {
            show.append(contact());
        }

    })
}