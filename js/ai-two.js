// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const apiKey = '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';
//const apiKey = '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';

// Mapping of hazard types to mitigations
const mitigationSuggestions = {
    'Fatigue': [
        'Avoid planning long shift periods (maximum shift period not exceeding 8 Hours during normal days).',
        'After night shift, avoid planning ATCO for the next day shift.',
        'Ensure the collection and analysis of data related to planned versus achieved rosters and analyse work deviation from roster plan.',
        'Achieve the required staffing level.'
    ],
    'Aircraft/Vehicle enter the runway without clearance': [
        'Apply low visibility procedure.',
        'Issue a reminder to ATCOs regarding standard phraseology.',
        'ATCOs to use specific taxi clearance instruction.',
        'ATCOs to request a follow me vehicle to escort Aircraft/vehicle.'
    ],
    'Unauthorized Maneuver on the Aerodrome': [
        'Ensure the briefing of ATCOs about any change on the aerodrome structure and layout.',
        'Ensure the regular training and competency checks for all ATCOs.',
        'Conduct Monthly Random Checks of operational frequencies to ensure the use of ICAO Standard phraseology.',
        'Ensure the follow-up and monitoring of ATCOs ICAO English proficiency.',
        'Ensure the preventive maintenance and availability of ATCO CWP Equipment.',
        'Ensure the availability of VCSS Runway Incursion Feature.'
    ],
    'Vehicles drivers not complying with the ground movement regulations (apron)': [
        'Ground Radar If avilable.'
    ],
    'FOD': [
        'Airport to perform scheduled inspection.'
    ]
};


// Event listener for changes in the Mitigation field
document.getElementById('consequences').addEventListener('input', handleMitigationInput);

function handleMitigationInput() {
    const hazardType = document.getElementById('hazard').value;
    const mitigationInput = document.getElementById('consequences').value.trim();
    const firstTwoWords = mitigationInput.split(' ').slice(0, 2).join(' ');

    if (hazardType && firstTwoWords.length >= 2) {
        // Check if the first two words match the beginning of any suggestion
        const matchingSuggestions = findMatchingSuggestions(hazardType, firstTwoWords);

        // Display suggestions
        displayMitigationSuggestions(matchingSuggestions);
    } else {
        // Clear suggestions if hazard type is not selected or less than two characters are entered
        clearSuggestions();
    }
}

function findMatchingSuggestions(hazardType, prefix) {
    const matchingSuggestions = [];

    const selectedMitigationArray = getMitigationArrayByType(hazardType);

    if (selectedMitigationArray) {
        selectedMitigationArray.forEach((suggestion) => {
            // Check if the suggestion includes the input prefix
            if (suggestion.toLowerCase().includes(prefix.toLowerCase())) {
                matchingSuggestions.push(suggestion);
            }
        });
    }

    return matchingSuggestions;
}

function getMitigationArrayByType(hazardType) {
    return mitigationSuggestions[hazardType] || null;
}

function displayMitigationSuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = '';

    if (suggestions.length > 0) {
        const suggestionsList = document.createElement('ul');
        suggestions.forEach((suggestion) => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;

            // Add click event listener to update Mitigation field when suggestion is clicked
            listItem.addEventListener('click', () => {
                console.log('Suggestion clicked:', suggestion);
                document.getElementById('consequences').value = suggestion;
                clearSuggestions();
            });

            suggestionsList.appendChild(listItem);
        });
        suggestionsContainer.appendChild(suggestionsList);
    }
}


function clearSuggestions() {
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = '';
}

