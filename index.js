// Funcionalidad para el menú móvil y otros efectos
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const headerActions = document.querySelector('.header-actions');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
            headerActions.classList.toggle('show');
            
            // Cambiar ícono
            const icon = this.querySelector('i');
            if (nav.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Timer (contador regresivo)
    const timerElements = {
        days: document.querySelector('.timer-item:nth-child(1) .timer-value'),
        hours: document.querySelector('.timer-item:nth-child(2) .timer-value'),
        minutes: document.querySelector('.timer-item:nth-child(3) .timer-value'),
        seconds: document.querySelector('.timer-item:nth-child(4) .timer-value')
    };
    
    if (timerElements.days) {
        // Establecer una fecha futura (2 días desde ahora)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 2);
        targetDate.setHours(10, 56, 20, 0);
        
        function updateTimer() {
            const now = new Date();
            const diff = targetDate - now;
            
            if (diff <= 0) {
                // Si el tiempo ha expirado, reiniciar
                targetDate.setDate(targetDate.getDate() + 2);
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            timerElements.days.textContent = days.toString().padStart(2, '0');
            timerElements.hours.textContent = hours.toString().padStart(2, '0');
            timerElements.minutes.textContent = minutes.toString().padStart(2, '0');
            timerElements.seconds.textContent = seconds.toString().padStart(2, '0');
        }
        
        // Actualizar cada segundo
        setInterval(updateTimer, 1000);
        updateTimer(); // Llamada inicial
    }
    
    // Efecto de scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (nav && nav.classList.contains('show')) {
                    mobileMenuBtn.click();
                }
            }
        });
    });
    
    // Añadir estilos para menú móvil cuando se muestre
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav.show, .header-actions.show {
                display: flex;
                flex-direction: column;
                position: fixed;
                top: 80px;
                left: 0;
                right: 0;
                background-color: var(--white);
                padding: 20px;
                box-shadow: var(--shadow-lg);
                z-index: 1000;
                gap: 20px;
            }
            
            .nav.show {
                align-items: flex-start;
            }
            
            .nav.show a {
                font-size: 18px;
                padding: 10px 0;
            }
            
            .header-actions.show {
                top: 240px;
                flex-direction: row;
                justify-content: center;
            }
        }
    `;
    document.head.appendChild(style);
});