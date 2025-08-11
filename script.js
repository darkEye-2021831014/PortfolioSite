document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-section');
    if (!target) return;

    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
      section.style.display = 'none';
    });

    // Show target section
    const activeSection = document.getElementById(target);
    if (activeSection) {
      activeSection.style.display = 'flex';
      activeSection.style.flexDirection = (target === 'home') ? 'row' : 'column';
      activeSection.style.alignItems = (target === 'home') ? 'center' : 'flex-start';
      window.scrollTo(0, 0);
    }

    // Update active nav-link styling
    document.querySelectorAll('.nav-link').forEach(nav => {
      nav.classList.remove('active');
    });
    link.classList.add('active');
  });
});
