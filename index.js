// destination slider
const img1 = document.getElementById("Img1");
const img2 = document.getElementById("Img2");
const img3 = document.getElementById("Img3");
let count = 1;

function nextSlide() {
    if (count <= 10) {
        img1.src = `L${count + 1}.png`;
        img2.src = `L${count + 2}.png`;
        img3.src = `L${count + 3}.png`;
        count += 1;
    } else if (count == 11) {
        img1.src = `L12.png`;
        img2.src = `L13.png`;
        img3.src = `L1.png`;
        count += 1;
    } else if (count == 12) {
        img1.src = `L13.png`;
        img2.src = `L1.png`;
        img3.src = `L2.png`;
        count += 1;
    } else if (count == 13) {
        img1.src = `L1.png`;
        img2.src = `L2.png`;
        img3.src = `L3.png`;
        count = 1;
    }
}

function prevSlide() {
    if (count > 3) {
        count -= 1;
        img1.src = `L${count}.png`;
        img2.src = `L${count + 1}.png`;
        img3.src = `L${count + 2}.png`;
    } else if (count == 3) {
        img1.src = `L1.png`;
        img2.src = `L2.png`;
        img3.src = `L3.png`;
        count = 1;
    } else if (count == 2) {
        img1.src = `L13.png`;
        img2.src = `L1.png`;
        img3.src = `L2.png`;
        count = 13;
    } else if (count == 1) {
        img1.src = `L12.png`;
        img2.src = `L13.png`;
        img3.src = `L1.png`;
        count = 12;
    }
}

// reveiw slider
const cards = document.querySelectorAll('.review_card');

function slider() {
    cards.forEach((card, index) => {
        setTimeout(() => {
            // Remove the class from all cards first
            cards.forEach(c => c.classList.remove("Vreview_card"));
            
            // Add the class to the current card
            card.classList.add("Vreview_card");
            console.log(card);
        }, 5000 * index); // delay each card by 3 seconds from the start
    }); 
    setInterval(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                // Remove the class from all cards first
                cards.forEach(c => c.classList.remove("Vreview_card"));
                
                // Add the class to the current card
                card.classList.add("Vreview_card");
                console.log(card);
            }, 5000 * index); // delay each card by 3 seconds from the start
        });  
    }, 25000);   
};

// Call the slider function
slider();
//review slider //