const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}
setInterval(createHeart,100);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)


function start () {
  // (PART A) GET SPLASH SCREEN
  let splash = document.getElementById("splash");
 
  // (PART B) PLAY BGM & REMOVE SPLASH SCREEN AFTER FADE IN
  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play();
    splash.remove();
  });
 
  // (PART C) GO!
  splash.classList.add("hide");
}

const flipBook = (elBook) => {
  elBook.style.setProperty("--c", 0); // Set current page
  elBook.querySelectorAll(".page").forEach((page, idx) => {
    page.style.setProperty("--i", idx);
    page.addEventListener("click", (evt) => {
      if (evt.target.closest("a")) return;
      const curr = evt.target.closest(".back") ? idx : idx + 1;
      elBook.style.setProperty("--c", curr);
    });
  });
};

document.querySelectorAll(".book").forEach(flipBook);

const toggle = document.getElementById('toggle');
const starsContainer = document.getElementById('stars-container');

function createStar(x, y) {
    const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    star.setAttribute('viewBox', '0 0 24 24');
    star.setAttribute('width', '24');
    star.setAttribute('height', '24');
    star.classList.add('star');
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.innerHTML = `<path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="currentColor" />`;
    return star;
}

function createStarGrid() {
    starsContainer.innerHTML = '';
    const minDistance = 6.67; // Approximate width of prior grid cell
    const starCount = 150; // Approximate number of stars in the original grid
    const placedStars = [];

    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    function isValidPosition(x, y) {
        return placedStars.every(star => distance(x, y, star.x, star.y) >= minDistance);
    }

    for (let i = 0; i < starCount; i++) {
        let x, y;
        let attempts = 0;
        do {
            x = Math.random() * 100;
            y = Math.random() * 100;
            attempts++;
        } while (!isValidPosition(x, y) && attempts < 100);

        if (attempts < 100) {
            placedStars.push({x, y});
            const star = createStar(x, y);
            starsContainer.appendChild(star);
        }
    }
}

function animateStars() {
    const stars = document.querySelectorAll('.star');
    const activeStars = document.querySelectorAll('.star.active');
    
    if (activeStars.length < Math.floor(stars.length / 16)) {
        stars.forEach(star => {
            if (!star.classList.contains('active') && Math.random() < 0.005) {
                star.classList.add('active');
                setTimeout(() => {
                    star.classList.remove('active');
                }, Math.random() * 3000 + 2000);
            }
        });
    }
}

function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark');
        document.querySelectorAll('.star').forEach(star => {
            star.style.color = '#818cf8';
        });
    } else {
        body.classList.remove('dark');
        document.querySelectorAll('.star').forEach(star => {
            star.style.color = '#4338ca';
        });
    }
}


// Initial setup
createStarGrid();
setTheme(true);
setInterval(animateStars, 100);
