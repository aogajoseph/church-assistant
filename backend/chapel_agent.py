import os
from dotenv import load_dotenv
import openai
import difflib
import yaml  # ✅ Import for reading YAML files

# Load environment variables
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# ✅ Load FAQs from faq.yaml
with open("faq.yaml", "r", encoding="utf-8") as f:
    faq_data = yaml.safe_load(f)

def get_agent_response(user_input):
    normalized_input = user_input.lower().strip()

    # Direct match
    for key in faq_data:
        if key in normalized_input:
            return faq_data[key]

    # Fuzzy match
    closest_match = difflib.get_close_matches(normalized_input, faq_data.keys(), n=1, cutoff=0.6)
    if closest_match:
        return faq_data[closest_match[0]]

    # GPT fallback with context
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are a helpful assistant for Nairobi Chapel, a church in Nairobi, Kenya. "
                        "The church offers two Sunday services (9AM & 11:30AM), Youth, Kids, and Expectant Moms campuses, "
                        "plus Bible studies, trainings, prayer meetings, and outreaches during the week. "
                        "Tithes can be given via M-Pesa Paybill 123456 or at give.nairobichapel.org. "
                        "Answer all user questions clearly and kindly using this context."
                    )
                },
                {"role": "user", "content": user_input}
            ]
        )

        if "choices" in response and response["choices"]:
            return response["choices"][0]["message"]["content"].strip()
        else:
            return "I'm not sure how to answer that right now — please try again later."

    except Exception as e:
        return "Sorry, something went wrong while processing your question. Please try again later."


# Loop for testing (optional)
if __name__ == "__main__":
    print("Welcome to Chapel Assistant! (Type 'exit' to quit)")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            print("Chapel Assistant: Goodbye!")
            break
        print("Chapel Assistant:", get_agent_response(user_input))
