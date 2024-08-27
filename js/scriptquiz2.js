document.addEventListener("DOMContentLoaded", function () {
    // This function changes the name
    function typename() {
      let name = "";
  
      // This prompts until a valid string is entered
      while (!name || typeof name !== "string" || name.trim() === "") {
        name = prompt("Please type your full name, ty:");
  
        if (name === null) return; // If user cancels the prompt
  
        if (!name || typeof name !== "string" || name.trim() === "") {
          alert("Invalid name. Please type your name correctly.");
        }
      }
  
      const nameElement = document.querySelector("h3 span.text-danger");
      if (nameElement) {
        nameElement.textContent = name;
      }
    }
  
    const changeNameButton = document.querySelector(
      "a.btn.btn-sm.btn-primary.btn-pill.transition-hover-start.m-0"
    );
    if (changeNameButton) {
      changeNameButton.addEventListener("click", typename);
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Prompt the user to enter the current date
    let date = "";
    while (!date || isNaN(Date.parse(date))) {
      date = prompt("Please enter the current date (e.g., YYYY-MM-DD):");
      if (date === null) return; // If user cancels the prompt
      if (!date || isNaN(Date.parse(date))) {
        alert("Invalid date format. Please enter a valid date.");
      }
    }
  
    const dateElement = document.querySelector("h2:nth-of-type(1)");
    if (dateElement) {
      dateElement.textContent = new Date(date).toLocaleDateString();
    }
  
    // Prompt the user to enter their email address
    let email = "";
    while (!email || !email.includes("@")) {
      email = prompt("Please enter your email address:");
      if (email === null) return;
      if (!email || !email.includes("@")) {
        alert("Invalid email format. Please enter a valid email.");
      }
    }
  
    const emailElement = document.querySelector("h2:nth-of-type(2)");
    if (emailElement) {
      emailElement.textContent = email;
    }
  });


    // Item list creation
    itemButton.addEventListener("click", function() {
        let numItems;
        do {
            numItems = parseInt(prompt("How many items would you like in the list? (1-10)"), 10);
            if (isNaN(numItems) || numItems < 1 || numItems > 10) {
                alert("Please enter a number between 1 and 10.");
            }
        } while (isNaN(numItems) || numItems < 1 || numItems > 10);

        const itemList = document.getElementById("itemList");
        itemList.innerHTML = "";

        for (let i = 1; i <= numItems; i++) {
            const item = document.createElement("div");
            item.className = "d-flex mb-4";
            item.innerHTML = `
                <div class="text-primary">
                    <img width="40" height="20" src="demo.files/svg/various/line-chart.svg" alt="...">
                </div>
                <div class="mx-2">
                    <h3 class="h5 fw-bold mb-1">Item #${i}</h3>
                    <p>This is item #${i}.</p>
                </div>
            `;
            itemList.appendChild(item);
        }
    });

