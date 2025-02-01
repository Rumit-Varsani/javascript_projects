let textarea = document.querySelector(".textarea"); // Select the first textarea
let addnote = document.querySelector(".addnote"); // Select the Add Note button
let outputbox = document.querySelector(".output"); // Select the output container

addnote.addEventListener("click", function() {
    // Get the value from the textarea
    let noteText = textarea.value;

    // Check if the textarea is not empty
    if (noteText.trim() !== "") {
        // Create a new output box for the note
        let newOutputBox = document.createElement("div");
        newOutputBox.classList.add("outputbox");

        // Create a new paragraph for the note text
        let newParagraph = document.createElement("p");
        newParagraph.classList.add("output-pera");
        newParagraph.textContent = noteText;

        // Create a delete button
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("dltbtn");
        deleteButton.textContent = "Delete";

        // Append the paragraph and delete button to the new output box
        newOutputBox.appendChild(newParagraph);
        newOutputBox.appendChild(deleteButton);

        // Append the new output box to the output container
        outputbox.appendChild(newOutputBox);

        // Clear the textarea
        textarea.value = "";

        // Show the output container if it's hidden
        outputbox.style.display = "block";

        // Add event listener to the delete button
        deleteButton.addEventListener("click", function() {
            outputbox.removeChild(newOutputBox);
        });
    }
});