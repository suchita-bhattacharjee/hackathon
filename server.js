const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());  // Allow cross-origin requests
app.use(express.json());  // Enable JSON parsing


// Mock patient data
const patients = {
    "12345": {
        name: "John Doe",
        age: 35,
        gender: "Male",
        medical_history: ["Hypertension", "Diabetes"],
        symptoms: ["Headache", "Dizziness"],
        last_lab_results: {
            blood_pressure: "120/80",
            sugar_level: "90",
            cholesterol: "180"
        }
    },
    "67890": {
        name: "Jane Smith",
        age: 28,
        gender: "Female",
        medical_history: ["Asthma"],
        symptoms: ["Cough", "Shortness of breath"],
        last_lab_results: {
            blood_pressure: "110/70",
            sugar_level: "85",
            cholesterol: "160"
        }
    }
};
// Endpoint to fetch patient details
app.get('/api/patient/:abhaId', (req, res) => {
    const { abhaId } = req.params;
    console.log(`Received request for ABHA ID: ${abhaId}`); // Log the ABHA ID received

    const patient = patients[abhaId];
    if (patient) {
        console.log("Returning patient data:", patient); // Log the patient data being sent
        res.json(patient);
    } else {
        console.log("Patient not found for ABHA ID:", abhaId); // Log if patient not found
        res.status(404).send("Patient not found");
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
