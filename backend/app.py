from flask import Flask, request, jsonify
from flask_cors import CORS
from chapel_agent import get_agent_response

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    
    if not user_message:
        return jsonify({"reply": "Sorry, I didn't receive a message."}), 400
    
    reply = get_agent_response(user_message)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(port=5000)
