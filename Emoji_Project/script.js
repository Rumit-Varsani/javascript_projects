let script = document.createElement("script");
script.src = "https://akhil-06.github.io/emoji_project/emojiList.js";
document.head.appendChild(script);

script.onload = function () {
  let container = document.querySelector(".container");

  for (let i = 0; i < emojiList.length; i++) {
    let d = emojiList[i];

    // Create a row
    let row = document.createElement("div");
    row.classList.add("row");

    // Create the emoji element
    let emoji = document.createElement("p");
    emoji.textContent = d.emoji;
    emoji.classList.add("emoji");
    row.appendChild(emoji);

    // Create the alias element
    let aliases = document.createElement("p");
    aliases.textContent = d.aliases[0]; // Displaying only the first alias
    aliases.classList.add("alies");
    row.appendChild(aliases);

    // Create the description element
    let description = document.createElement("p");
    description.textContent = d.description;
    description.classList.add("desc");
    row.appendChild(description);

    // Append the row to the container
    container.appendChild(row);
  }
};

script.onerror = function () {
  console.error("Failed to load the script.");
};
