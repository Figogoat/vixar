document.addEventListener('DOMContentLoaded', () => {
    console.log('Plataforma de Bienes Raíces IA iniciada.');
});

function search() {
    const query = document.getElementById('search-bar').value;
    fetch(`/api/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayResults(data) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '';

    if (data.length === 0) {
        resultsSection.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }

    data.forEach(item => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
        `;
        resultsSection.appendChild(resultDiv);
    });
}
fetch
[
    {
        "id": 1,
        "title": "Casa en Madrid",
        "description": "Hermosa casa en el centro de Madrid con 4 habitaciones y 3 baños.",
        "type": "propiedad"
    },
    {
        "id": 2,
        "title": "Broker Juan Perez",
        "description": "Experto en bienes raíces con más de 20 años de experiencia.",
        "type": "broker"
    }
]fitch
const express = require('express');
const app = express();
const port = 3000;
const data = require('./data.json');

app.use(express.static('public'));

app.get('/api/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = data.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );
    res.json(results);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


