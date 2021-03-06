document.addEventListener("DOMContentLoaded", () => {
  let elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  let images = [
    {
      name: "axe",
      image: "assets/images/axe.jpg",
    },
    {
      name: "axe",
      image: "assets/images/axe.jpg",
    },
    {
      name: "chen",
      image: "assets/images/chen.jpg",
    },
    {
      name: "chen",
      image: "assets/images/chen.jpg",
    },
    {
      name: "jugg",
      image: "assets/images/jugg.jpg",
    },
    {
      name: "jugg",
      image: "assets/images/jugg.jpg",
    },
    {
      name: "mk1",
      image: "assets/images/mk1.jpg",
    },
    {
      name: "mk1",
      image: "assets/images/mk1.jpg",
    },
    {
      name: "pudge",
      image: "assets/images/pudge.png",
    },
    {
      name: "pudge",
      image: "assets/images/pudge.png",
    },
    {
      name: "rikie",
      image: "assets/images/rikie.jpg",
    },
    {
      name: "rikie",
      image: "assets/images/rikie.jpg",
    },
    {
      name: "sf",
      image: "assets/images/sf.png",
    },
    {
      name: "sf",
      image: "assets/images/sf.png",
    },
    {
      name: "sven",
      image: "assets/images/sven.jpeg",
    },
    {
      name: "sven",
      image: "assets/images/sven.jpeg",
    },
    {
      name: "logo",
      image: "assets/images/logo.jpg",
    },
    {
      name: "logo",
      image: "assets/images/logo.jpg",
    },
  ];

  images.sort(() => 0.5 - Math.random());

  let imgContainer = document.querySelector("#myGrid");
  let count = 0;
  let cardChoosen = [];
  let cardChoosenId = [];
  let winCount = 0;
  images.forEach(() => {
    let img = document.createElement("img");
    img.setAttribute("src", "assets/images/mk2.jpg");
    imgContainer.appendChild(img);
    img.setAttribute("id", count);
    count++;

    img.addEventListener("click", (e) => {
      if (
        e.target.getAttribute("src") != "assets/images/white.png" &&
        e.target.getAttribute("src") == "assets/images/mk2.jpg"
      ) {
        let cardId = e.target.id;
        cardChoosen.push(images[cardId].name);
        cardChoosenId.push(cardId);
        e.target.setAttribute("src", images[cardId].image);
        if (cardChoosen.length === 2) {
          setTimeout(() => {
            let choosenOne = cardChoosen[0];
            let choosenTwo = cardChoosen[1];

            if (choosenOne === choosenTwo) {
              alert("you won");
              let resetOne = document.getElementById(cardChoosenId[0]);
              resetOne.setAttribute("src", "assets/images/white.png");
              resetOne.setAttribute("disabled", "true");
              let resetTwo = document.getElementById(cardChoosenId[1]);
              resetTwo.setAttribute("src", "assets/images/white.png");

              cardChoosen = [];
              cardChoosenId = [];
              winCount++;
            } else {
              alert("try again");
              let resetOne = document.getElementById(cardChoosenId[0]);
              resetOne.setAttribute("src", "assets/images/mk2.jpg");

              let resetTwo = document.getElementById(cardChoosenId[1]);
              resetTwo.setAttribute("src", "assets/images/mk2.jpg");
              cardChoosen = [];
              cardChoosenId = [];
            }
          }, 500);
        }
      }
    });
  });
});
