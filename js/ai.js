// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const apiKey = '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';

// Mapping of hazard types 
const consequencesSuggestions = {
    'Fatigue': [
        'Loss of separation'
    ],
    'Aircraft/Vehicle enter the runway without clearance': [
        'Runway Incursion'
    ],
    'Unauthorized Maneuver on the Aerodrome': [
        'Runway excursion'
    ],
    'Vehicles drivers not complying with the ground movement regulations (apron)': [
        'Crossed Vehicle Ahead/behind'
    ],
    'FOD': [
        'Damage to Aircrafts'
    ]
};

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

// Mapping of hazard types to Severity
const SeveritySuggestions = {
    'Fatigue': [
        'Major Incident'
    ],
    'Aircraft/Vehicle enter the runway without clearance': [
        'Major Incident'
    ],
    'Unauthorized Maneuver on the Aerodrome': [
        'Major Incident'
    ],
    'Vehicles drivers not complying with the ground movement regulations (apron)': [
        'Significant Incident'
    ],
    'FOD': [
        'Significant Incident'
    ]
};

// Mapping of hazard types to Likelihood
const LikelihoodSuggestions = {
    'Fatigue': [
        'Remote'
    ],
    'Aircraft/Vehicle enter the runway without clearance': [
        'Remote'
    ],
    'Unauthorized Maneuver on the Aerodrome': [
        'Remote'
    ],
    'Vehicles drivers not complying with the ground movement regulations (apron)': [
        'Occasional'
    ],
    'FOD': [
        'Occasional'
    ]
};

// Mapping of hazard types to Risk
const RiskSuggestions = {
    'Fatigue': [
        'B3'
    ],
    'Aircraft/Vehicle enter the runway without clearance': [
        'B3'
    ],
    'Unauthorized Maneuver on the Aerodrome': [
        'B3'
    ],
    'Vehicles drivers not complying with the ground movement regulations (apron)': [
        'C2'
    ],
    'FOD': [
        'C2'
    ]
};

// Mapping of hazard types to Severity Post
const SeverityPostSuggestions = {
    'Fatigue': [
        'Major Incident'
    ],
    'Aircraft/Vehicle enter the runway without clearance': [
        'Major Incident'
    ],
    'Unauthorized Maneuver on the Aerodrome': [
        'Major Incident'
    ],
    'Vehicles drivers not complying with the ground movement regulations (apron)': [
        'Significant Incident'
    ],
    'FOD': [
        'Significant Incident'
    ]
};

// Mapping of hazard types to Likelihood Post
const LikelihoodPostSuggestions = {
    'Fatigue': [
        'Improbable'
    ],
    'Aircraft/Vehicle enter the runway without clearance': [
        'Improbable'
    ],
    'Unauthorized Maneuver on the Aerodrome': [
        'Improbable'
    ],
    'Vehicles drivers not complying with the ground movement regulations (apron)': [
        'Improbable'
    ],
    'FOD': [
        'Improbable'
    ]
};

// Mapping of hazard types to Risk Post
const RiskPostSuggestions = {
    'Fatigue': [
        'B4'
    ],
    'Aircraft/Vehicle enter the runway without clearance': [
        'B4'
    ],
    'Unauthorized Maneuver on the Aerodrome': [
        'B4'
    ],
    'Vehicles drivers not complying with the ground movement regulations (apron)': [
        'C4'
    ],
    'FOD': [
        'C4'
    ]
};

// Event listeners for changes in different fields
document.getElementById('mitigation').addEventListener('input', function () {
    handleInput('mitigation', 'Mitigation');
});

document.getElementById('consequences').addEventListener('input', function () {
    handleInput('consequences', 'Consequences');
});

document.getElementById('severity').addEventListener('input', function () {
    handleInput('severity', 'Severity');
});

document.getElementById('likelihood').addEventListener('input', function () {
    handleInput('likelihood', 'Likelihood');
});

document.getElementById('risk_class').addEventListener('input', function () {
    handleInput('risk_class', 'Risk');
});

document.getElementById('severity_post').addEventListener('input', function () {
    handleInput('severity_post', 'Severity Post');
});

document.getElementById('likelihood_post').addEventListener('input', function () {
    handleInput('likelihood_post', 'Likelihood Post');
});

document.getElementById('risk_class_post').addEventListener('input', function () {
    handleInput('risk_class_post', 'Risk Post');
});

function handleInput(inputId, inputType) {
    const hazardType = document.getElementById('hazard').value;
    const inputValue = document.getElementById(inputId).value.trim();
    const firstTwoWords = inputValue.split(' ').slice(0, 2).join(' ');

    const suggestionsContainer = document.getElementById('suggestions-container');
    const matchingSuggestions = findMatchingSuggestions(hazardType, firstTwoWords, inputType);
    displaySuggestions(matchingSuggestions, inputId, suggestionsContainer);
}

function findMatchingSuggestions(hazardType, prefix, inputType) {
    const matchingSuggestions = [];
    let selectedArray;

    switch (inputType) {
        case 'Mitigation':
            selectedArray = getMitigationArrayByType(hazardType);
            break;
        case 'Consequences':
            selectedArray = getConsequencesArrayByType(hazardType);
            break;
        case 'Severity':
            selectedArray = getSeveritySuggestionsArrayByType(hazardType);
            break;
        case 'Likelihood':
            selectedArray = getLikelihoodSuggestionsArrayByType(hazardType);
            break;
        case 'Risk':
            selectedArray = getRiskSuggestionsArrayByType(hazardType);
            break;
        case 'Severity Post':
            selectedArray = getSeverityPostArrayByType(hazardType);
            break;
        case 'Likelihood Post':
            selectedArray = getLikelihoodPostArrayByType(hazardType);
            break;
        case 'Risk Post':
            selectedArray = getRiskPostSuggestionsArrayByType(hazardType);
            break;
        default:
            // Default to mitigation if no specific type is provided
            selectedArray = getMitigationArrayByType(hazardType);
            break;
    }

    if (selectedArray) {
        selectedArray.forEach((suggestion) => {
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

function getConsequencesArrayByType(hazardType) {
    return consequencesSuggestions[hazardType] || null;
}

function getSeveritySuggestionsArrayByType(hazardType) {
    return SeveritySuggestions[hazardType] || null;
}
function getLikelihoodSuggestionsArrayByType(hazardType) {
    return LikelihoodSuggestions[hazardType] || null;
}
function getRiskSuggestionsArrayByType(hazardType) {
    return RiskSuggestions[hazardType] || null;
}
function getSeverityPostArrayByType(hazardType) {
    return SeverityPostSuggestions[hazardType] || null;
}
function getLikelihoodPostArrayByType(hazardType) {
    return LikelihoodPostSuggestions[hazardType] || null;
}
function getRiskPostSuggestionsArrayByType(hazardType) {
    return RiskPostSuggestions[hazardType] || null;
}

// Add similar functions for other input types if needed


function getMitigationArrayByType(hazardType) {
    return mitigationSuggestions[hazardType] || null;
}

function displaySuggestions(suggestions, inputElement, suggestionsContainer) {
    suggestionsContainer.innerHTML = '';

    if (suggestions.length > 0) {
        const suggestionsList = document.createElement('ul');
        suggestions.forEach((suggestion) => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;

            // Add click event listener to update input field when suggestion is clicked
            listItem.addEventListener('click', () => {
                console.log('Suggestion clicked:', suggestion, inputElement);
                document.getElementById(inputElement).value = suggestion;
                clearSuggestions(suggestionsContainer);
            });

            suggestionsList.appendChild(listItem);
        });
        suggestionsContainer.appendChild(suggestionsList);
    }
}


function clearSuggestions(suggestionsContainer) {
    suggestionsContainer.innerHTML = '';
}
