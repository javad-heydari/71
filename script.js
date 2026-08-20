document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const formData = {
            name: name,
            email: email,
            message: message
        };

        try {
            const response = await fetch('/api/contact', { // Assuming your backend API endpoint is /api/contact
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                formMessage.textContent = result.message || 'پیام شما با موفقیت ارسال شد!';
                formMessage.style.color = 'green';
                contactForm.reset();
            } else {
                const errorData = await response.json();
                formMessage.textContent = errorData.error || 'خطایی در ارسال پیام رخ داد.';
                formMessage.style.color = 'red';
            }
        } catch (error) {
            console.error('Error sending message:', error);
            formMessage.textContent = 'خطای اتصال به سرور.';
            formMessage.style.color = 'red';
        }
    });
});
