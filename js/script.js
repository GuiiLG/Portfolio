// Add custom JavaScript here
// Close button modal
function typingScript(){
    const text = "I'm Luigi."
    const typingText = document.querySelector('.typing-text')
    const typingDelay = 100
    typeText(text, typingText, typingDelay)
}
function typeText(text, typeText, typingDelay){
    for(let i = 0; i < text.length; i++){
        setTimeout(()=>{
            typeText.textContent += text.charAt(i);
        }, typingDelay * i)
    }
}

document.addEventListener('DOMContentLoaded', typingScript)