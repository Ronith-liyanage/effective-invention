// This JavaScript file is used to fade in and out the text on the page. 
 
function fadeIn() { 
  // Get the element that we want to fade in. 
  const textElement = document.querySelector('.text'); 
 
  // Set the initial opacity to 0. 
  textElement.style.opacity = 0; 
 
  // Create a new animation that will fade in the text over 5 seconds. 
  const animation = document.createElement('animation'); 
  animation.name = 'fadeIn'; 
  animation.duration = 5000; 
  animation.timingFunction = 'ease-in'; 
  animation.fill = 'forwards'; 
 
  // Add the animation to the text element. 
  textElement.appendChild(animation); 
 
  // Start the animation. 
  animation.play(); 
} 
 
function fadeOut() { 
  // Get the element that we want to fade out. 
  const textElement = document.querySelector('.text'); 
 
  // Set the initial opacity to 1. 
  textElement.style.opacity = 1; 
 
  // Create a new animation that will fade out the text over 5 seconds. 
  const animation = document.createElement('animation'); 
  animation.name = 'fadeOut'; 
  animation.duration = 5000; 
  animation.timingFunction = 'ease-out'; 
  animation.fill = 'forwards'; 
 
  // Add the animation to the text element. 
  textElement.appendChild(animation); 
 
  // Start the animation. 
  animation.play(); 
} 
 
// Call the fadeIn function when the page loads. 
window.onload = fadeIn; 
