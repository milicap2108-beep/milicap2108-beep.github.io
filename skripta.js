// ELEMENTI //
const menuBtn = document.getElementById('meni-dugme');
const menuOverlay = document.querySelector('.meni-overlay');
const closeBtn = document.querySelector('.close-dugme');
const hamburger = document.querySelector('.hamburger'); 
const hamburgerZ = document.querySelector('.hamburger-z');
const modal = document.getElementById('modal-uspeh');
const forma = document.getElementById('kontakt-forma');

// MENI - DESKTOP //
if (menuBtn) {
    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// MENI - HAMBURGER ZUTI //
if (hamburger) {
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// MENI - HAMBURGER ZELENI //
if (hamburgerZ) {
    hamburgerZ.addEventListener('click', function(e) {
        e.preventDefault();
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// ZATVORI SVE MENIJE //
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// MODAL ZA KONTAKT FORMU //
if (forma && modal) {
    const closeBtn = document.querySelector('.modal-close');
    
    forma.addEventListener('submit', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        forma.reset();
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}