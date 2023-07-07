
export function alertMessage(message, time=1000){
    const alertContainer = document.querySelector('.alerts-container')
    
    const alertDiv = document.createElement('div');
    alertDiv.textContent = message;
    alertDiv.classList.add('alert');
    alertContainer.prepend(alertDiv)
    
    if (time == null) return
    
    setTimeout(() => {
        alertDiv.classList.add('hide')
        alertDiv.addEventListener('transitionend', () => {
            alertDiv.remove()
        })
    }, time)
}