
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && !event.target.closest('nav')) {
            navMenu.classList.remove('active');
        }
    });});
    
document.addEventListener('DOMContentLoaded', function() {

    initializeContactForm();
});





function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (validateForm()) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
        
        const formInputs = contactForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                validateInput(this);
            });
            
            input.addEventListener('blur', function() {
                validateInput(this);
            });
        });
    }
}

function validateInput(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    
    if (!errorElement) return;
    
    let isValid = true;
    let errorMessage = '';
    
    if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    } 
    else if (input.type === 'email' && input.value.trim()) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    else if (input.type === 'tel' && input.value.trim()) {
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(input.value.replace(/\D/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number (10-15 digits)';
        }
    }
    else if (input.hasAttribute('pattern') && input.value.trim()) {
        const pattern = new RegExp(input.getAttribute('pattern'));
        if (!pattern.test(input.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid value';
            
            if (input.id === 'name') {
                errorMessage = 'Please enter a valid name (2-50 characters, letters only)';
            }
        }
    }
    else if (input.hasAttribute('minlength') && input.value.trim()) {
        const minLength = parseInt(input.getAttribute('minlength'));
        if (input.value.length < minLength) {
            isValid = false;
            errorMessage = `Minimum length is ${minLength} characters`;
        }
    }
    
    if (!isValid) {
        input.classList.add('invalid');
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    } else {
        input.classList.remove('invalid');
        errorElement.style.display = 'none';
    }
    
    return isValid;
}

function validateForm() {
    const contactForm = document.getElementById('contact-form');
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    
    let isFormValid = true;
    
    formInputs.forEach(input => {
        if (input.hasAttribute('required') || input.value.trim()) {
            const isInputValid = validateInput(input);
            isFormValid = isFormValid && isInputValid;
        }
    });
    
    return isFormValid;
}

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Success: Item added to cart!');
        });
    });
});








