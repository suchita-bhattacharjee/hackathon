const BASE_URL = "http://localhost:3000";

// Function to fetch patient data using ABHA ID
async function fetchPatientData(abhaId) {
    try {
        document.getElementById('patient-data').innerHTML = '<p>Loading...</p>';
        const response = await fetch(`${BASE_URL}/api/patient/${abhaId}`);
        if (!response.ok) throw new Error('Patient not found. Please check the ABHA ID.');
        const patient = await response.json();
        displayPatientDetails(patient);
    } catch (error) {
        document.getElementById('patient-data').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

// Function to display patient details
function displayPatientDetails(patient) {
    document.getElementById('patient-data').innerHTML = `
        <h3>Patient Details</h3>
        <p><strong>Name:</strong> ${patient.name}</p>
        <p><strong>Age:</strong> ${patient.age}</p>
        <p><strong>Gender:</strong> ${patient.gender}</p>
        <p><strong>Medical History:</strong> ${patient.medical_history?.join(', ') || 'No history available'}</p>
    `;
}
// Function to fetch patient data using ABHA ID
async function fetchPatientData(abhaId) {
    try {
        // Display loading state
        document.getElementById('patient-data').innerHTML = '<p>Loading...</p>';

        // Log the URL being requested for debugging
        const url = `${BASE_URL}/api/patient/${abhaId}`;
        console.log("Fetching data from URL:", url);

        // API call to fetch patient data
        const response = await fetch(url);
        if (!response.ok) throw new Error('Patient not found. Please check the ABHA ID.');

        const patient = await response.json();
        console.log("Fetched patient data:", patient);  // Log the fetched data

        // Display patient details
        displayPatientDetails(patient);
    } catch (error) {
        console.error("Error fetching patient data:", error); // Log error if any
        document.getElementById('patient-data').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}


// Event listener for ABHA form submission
document.getElementById('abha-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const abhaId = document.getElementById('abha-id-input').value;
    fetchPatientData(abhaId);


    const voiceInputButton = document.getElementById('voice-input');
const symptomsInput = document.getElementById('symptoms');

let isListening = false;

voiceInputButton.addEventListener('click', () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    isListening = true;
    recognition.start();

    recognition.onresult = function(event) {
        const voiceText = event.results[0][0].transcript;
        symptomsInput.value = voiceText;
        isListening = false;
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        alert('Speech recognition error. Please try again.');
        isListening = false;
    };

    setTimeout(() => {
        if (isListening) {
            recognition.stop();
            alert('Speech recognition timed out. Please try again.');
            isListening = false;
        }
    }, 600000);
});

});
