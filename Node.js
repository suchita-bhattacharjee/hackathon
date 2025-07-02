const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock patient database
const patients = {
    "12345": {
        name: "John Doe",
        age: 35,
        gender: "Male",
        medical_history: ["Hypertension", "Diabetes"],
    },
    "67890": {
        name: "Jane Smith",
        age: 28,
        gender: "Female",
        medical_history: ["Asthma"],
    }
};

// Endpoint to fetch patient details
app.get('/api/patient/:abhaId', (req, res) => {
    const { abhaId } = req.params;
    const patient = patients[abhaId];
    if (patient) {
        res.json(patient);
    } else {
        res.status(404).send("Patient not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
