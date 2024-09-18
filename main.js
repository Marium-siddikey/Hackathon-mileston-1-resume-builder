document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const skillsSection = document.getElementById('skills');
    
    toggleButton.addEventListener('click', () => {
        if (skillsSection.classList.contains('hidden')) {
            skillsSection.classList.remove('hidden'); // Show the skills section
            toggleButton.value = 'Hide skills'; // Update button text
        } else {
            skillsSection.classList.add('hidden'); // Hide the skills section
            toggleButton.value = 'Show skills'; // Update button text
        }
    });
});

