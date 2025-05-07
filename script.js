document.addEventListener('DOMContentLoaded', () => {
    const animatedButton = document.getElementById('animatedButton');
    const animationChoice = document.getElementById('animationChoice');
    const savePreferenceButton = document.getElementById('savePreference');
    const animatedBox = document.getElementById('animatedBox');

    const PREFERENCE_KEY = 'userAnimationPreference';

    // Function to store user preference in localStorage
    function storePreference(preference) {
        localStorage.setItem(PREFERENCE_KEY, preference);
    }

    // Function to retrieve user preference from localStorage
    function getPreference() {
        return localStorage.getItem(PREFERENCE_KEY);
    }

    // Function to apply the selected animation
    function applyAnimation(element, animationName) {
        element.classList.remove('slide-in', 'fade-in', 'hidden'); // Remove previous animations and hide class
        if (animationName === 'slide') {
            element.classList.add('animated', 'slide-in');
        } else if (animationName === 'fade') {
            element.classList.add('animated', 'fade-in');
        } else {
            element.classList.add('hidden'); // Hide if no valid preference
        }
    }

    // Apply saved preference on load
    const savedPreference = getPreference();
    if (savedPreference) {
        animationChoice.value = savedPreference;
        applyAnimation(animatedBox, savedPreference);
    } else {
        animatedBox.classList.add('hidden'); // Hide by default if no preference
    }

    // Event listener for button hover animation
    animatedButton.addEventListener('mouseover', () => {
        animatedButton.classList.add('pulsate');
    });

    animatedButton.addEventListener('mouseout', () => {
        animatedButton.classList.remove('pulsate');
    });

    // Event listener to save user preference
    savePreferenceButton.addEventListener('click', () => {
        const selectedAnimation = animationChoice.value;
        storePreference(selectedAnimation);
        alert(`Preference saved: ${selectedAnimation}`);
    });

    // Event listener to trigger animation based on preference (e.g., on another user action)
    animatedButton.addEventListener('click', () => {
        const currentPreference = getPreference();
        applyAnimation(animatedBox, currentPreference);
    });
});