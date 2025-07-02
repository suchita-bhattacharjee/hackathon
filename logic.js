// Get the form elements
const form = document.getElementById('triage-form');
const resultDiv = document.getElementById('result');
const fetchDataButton = document.getElementById('fetch-data');
const voiceInputButton = document.getElementById('voice-input');

// Handle form submission to show the result
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const abhaId = document.getElementById('abha-id').value;
    const symptoms = document.getElementById('symptoms').value;
    
    // Here, you would make a request to your backend API to get the priority score
    // For now, we're just showing the result directly
    console.log(`ABHA ID: ${abhaId}, Symptoms: ${symptoms}`);

    // Simulate a priority score result
    resultDiv.style.display = 'block';
});

// Handle the Fetch Data button
fetchDataButton.addEventListener('click', () => {
    const abhaId = document.getElementById('abha-id').value;
    if (abhaId) {
        // Simulate fetching data for the given ABHA ID
        alert(`Fetching data for ABHA ID: ${abhaId}`);
    } else {
        alert('Please enter an ABHA ID.');
    }
});

// Handle the Voice Input button
voiceInputButton.addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const voiceText = event.results[0][0].transcript;
        document.getElementById('symptoms').value = voiceText;
    };

    recognition.onerror = function(event) {
        alert('Error occurred: ' + event.error);
    };
});
