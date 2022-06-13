const content = document.getElementById('content');

function initial() {
    content.innerHTML =
    `<div class="navbar">

    <img src="/Assets/shaka.svg" alt="Shaka" id="shaka">
    <h2>Aloha!</h2>

    <ol class="menu">
        <li><button class="active">Home</button></li>
        <li><button>Menu</button></li>
        <li><button>Contact</button></li>
    </ol>

    <h2>Social Media</h2>

    <ol class="icons">
        <li><a href="https://www.facebook.com"><img src="/Assets/facebook.png" alt="Facebook" class="smallicons"></a></li>
        <li><a href="https://www.twitter.com"><img src="/Assets/twitter.png" alt="Twitter" class="smallicons"></a></li>
        <li><a href="https://www.instagram.com"><img src="/Assets/isnta.png" alt="Instagram" class="smallicons"></a></li>
    </ol>
</div>

<div class="showcase">
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

initial();