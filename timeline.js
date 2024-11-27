const content = {
    intro: `
        <div class="info-content">
            <img src="images/calgary.jpeg" alt="Calgary Winter">
            <div class="text">
                <h2>Explore the Year-Round Beauty of Calgary</h2>
                <p>Welcome to Calgary’s magical winter! Snow blankets the city, creating a serene, picturesque scene. While many only dream of snowy cities, Calgary offers more than just breathtaking views—enjoy winter festivals, outdoor skating, and cozying up in charming cafes.
                <br><br>Ready to discover more of Calgary’s hidden wonders? <br> Click on the <span style="color: #d48750; font-weight: bold;">"2024.March - Abbotsford Tulip Festival" </span> button above to continue exploring Calgary's stunning beauty through every season!</p>
            </div>
        </div>
       
    `,
    tulip: `
        <div class="info-content">
            <img src="images/tulip.jpeg" alt="Tulip Festival">
            <div class="text">
                <h2>A Colorful Journey Through Abbotsford Tulip Festival</h2>
                <p>Every March, Vancouver bursts into color at the Abbotsford Tulip Festival. Stroll through acres of vibrant tulip fields, capturing breathtaking photos and enjoying the serene beauty of nature. A must-visit for flower and photography lovers!</p>
            </div>
        </div>
    `,
    drumheller: `
        <div class="info-content">
            <img src="images/drumheller.jpeg" alt="Drumheller">
            <div class="text">
                <h2>Exploring Drumheller’s Majestic Sandstone Formations</h2>
                <p>Discover Drumheller in April, home to dramatic sandstone formations and rich dinosaur fossils. Explore the iconic hoodoos and step into a prehistoric world at this unique Alberta destination.</p>
            </div>
        </div>
    `,
    canyon: `
        <div class="info-content">
            <img src="images/canyon.jpeg" alt="Johnson Canyon">
            <div class="text">
                <h2>Discover the Beauty of Johnson Canyon's Waterfalls</h2>
                <p>Hike Johnson Canyon in July for stunning waterfalls and lush scenery. The well-maintained trails lead you through narrow gorges and breathtaking views, perfect for adventurers of all levels.</p>
            </div>
        </div>
    `,
    lake: `
        <div class="info-content">
            <img src="images/lake.jpeg" alt="Moraine Lake">
            <div class="text">
                <h2>Awe-Inspiring Views at Moraine Lake in Banff</h2>
                <p>August is ideal for visiting Moraine Lake in Banff. With turquoise waters and majestic mountain views, it’s a quintessential Canadian experience. Don’t forget to bring your camera for this bucket-list destination!</p>
            </div>
        </div>
    `
};

// Select buttons and info box
const buttons = document.querySelectorAll("button");
const infoBox = document.getElementById("info-box");

// Initially display "intro "content
infoBox.innerHTML = content.intro;

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.id; // Get button id (intro, tulip,
        infoBox.innerHTML = content[id]; // put each content into the info box

        buttons.forEach(button => button.classList.remove("button-clicked"));
        button.classList.add("button-clicked"); // Add 'button-clicked' class to the clicked button

    });
});