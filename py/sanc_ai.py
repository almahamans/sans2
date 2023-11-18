import cgi
import json
import random
import openai

# Replace with your actual OpenAI API key
openai.api_key = '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'

# Mapping of hazard types to mitigations
mitigation_suggestions = {
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
}

def suggest_mitigation(hazard_input):
    if hazard_input not in mitigation_suggestions:
        return 'Invalid Hazard Type.'

    # Randomly select a mitigation suggestion from the array
    suggested_mitigation = random.choice(mitigation_suggestions[hazard_input])
    return suggested_mitigation

# Handle the HTTP request
def handle_request():
    form = cgi.FieldStorage()
    hazard_input = form.getvalue("hazardInput")

    suggested_mitigation = suggest_mitigation(hazard_input)

    # Send JSON response
    response = {"suggestedMitigation": suggested_mitigation}
    print("Content-type: application/json\n")
    print(json.dumps(response))

if __name__ == "__main__":
    handle_request()
    