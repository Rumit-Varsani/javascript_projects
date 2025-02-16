let c_color = document.getElementById("change-color");

function generateRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    return randomColor;
}

c_color.addEventListener("click", function(){
   
    let color = generateRandomColor();
    let dot=document.getElementById("dot");
    dot.style.backgroundColor = color;

});

function generateRandomShape() {
    const shapeDiv = document.querySelector('.shape');
    
    // Generate random properties
    const width = Math.floor(Math.random() * 100) +100; // Random width between 50 and 150
    const height = Math.floor(Math.random() * 100) +100; // Random height between 50 and 150
    const borderRadius = Math.random() < 0.5 ? '0%' : '50%'; // Circle or rectangle
    const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Random color

    // Apply properties to the shape
    shapeDiv.style.width = `${width}px`;
    shapeDiv.style.height = `${height}px`;
    shapeDiv.style.borderRadius = borderRadius;
    shapeDiv.style.backgroundColor = bgColor;

    // Position randomly within the container
    
}


