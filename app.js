// can observe multiple entries or elements at the same time
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // when entry is visible to the user on screen
      entry.target.classList.add("show"); // a class gets added to the classList
    } else {
      // else statement is used so that the class is removes once it is not visible and not stop the animation after just once and show multiple times
      entry.target.classList.remove("show");
    }
  });
});

// to select all the elements with the class 'hidden' in html file
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el)); // to tell the observer what to observe which here is all the hidden elements
