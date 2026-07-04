// HRMS Serene - Forgot Password Interactivity

document.addEventListener('DOMContentLoaded', () => {
    const forgotForm = document.getElementById('forgotForm');
    const successMessage = document.getElementById('successMessage');

    if (forgotForm && successMessage) {
        forgotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Hide the form with a fade-out effect
            forgotForm.style.transition = 'opacity 0.3s ease-out';
            forgotForm.style.opacity = '0';
            
            setTimeout(() => {
                forgotForm.style.display = 'none';
                
                // Show the success notification
                successMessage.style.display = 'flex';
                successMessage.style.opacity = '0';
                successMessage.style.transition = 'opacity 0.4s ease-out';
                
                // Force reflow
                successMessage.getBoundingClientRect();
                successMessage.style.opacity = '1';
            }, 300);
        });
    }
});
