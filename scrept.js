        // Form submission handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const eventType = document.getElementById('eventType').value;
            const message = document.getElementById('message').value;
            
            // Get selected services
            const selectedServices = [];
            if (document.getElementById('soundCheck').checked) selectedServices.push('Sonido');
            if (document.getElementById('lightsCheck').checked) selectedServices.push('Iluminación');
            if (document.getElementById('stageCheck').checked) selectedServices.push('Tarima/Escenario');
            if (document.getElementById('ledCheck').checked) selectedServices.push('Pantallas LED');
            if (document.getElementById('effectsCheck').checked) selectedServices.push('Efectos Especiales');
            if (document.getElementById('productionCheck').checked) selectedServices.push('Producción Integral');
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show an alert
            alert(`¡Gracias ${name}!\n\nHemos recibido tu solicitud para un evento de tipo "${eventType}" interesado en: ${selectedServices.join(', ')}.\n\nNos pondremos en contacto contigo pronto al correo: ${email}`);
            
            // Reset form
            document.getElementById('contactForm').reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(29, 53, 87, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.backgroundColor = 'rgba(29, 53, 87, 0.95)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }
        });
        
        // Initialize carousel with custom interval
        const equipmentCarousel = document.getElementById('equipmentCarousel');
        if(equipmentCarousel) {
            const carousel = new bootstrap.Carousel(equipmentCarousel, {
                interval: 5000,
                wrap: true,
                pause: false
            });
        }
        
        // Form validation enhancement
        const contactForm = document.getElementById('contactForm');
        if(contactForm) {
            const inputs = contactForm.querySelectorAll('input, select, textarea');
            
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    if(this.value.trim() === '' && this.hasAttribute('required')) {
                        this.classList.add('is-invalid');
                    } else {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                    }
                });
                
                input.addEventListener('input', function() {
                    this.classList.remove('is-invalid');
                    if(this.value.trim() !== '') {
                        this.classList.add('is-valid');
                    } else {
                        this.classList.remove('is-valid');
                    }
                });
            });
        }