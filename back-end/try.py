import sys
import json
from groq import Groq
import os

def generate_summary(feedback_data):
    formatted_feedback = "\n".join([f"- {q['question']}: {q['answer']}" for q in feedback_data])

    prompt = f"""
    Analyze the following feedback responses and generate a structured summary including:
    - **Top priority issues**
    - **Positive aspects**
    - **Suggestions for improvement**
    - **Overall sentiment**
    
    Feedback Data:
    {formatted_feedback}
    """

    # API Key (Use environment variable for security)
    api_key = "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"

    if not api_key:
        return {"error": "API key not found"}

    # Initialize AI client
    client = Groq(api_key=api_key)

    try:
        chat_completion = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model="llama3-8b-8192"
        )

        ai_response = chat_completion.choices[0].message.content
        return {"summary": ai_response}

    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.argv[1])
        feedback_questions = input_data.get("questions", [])

        if not feedback_questions:
            print(json.dumps({"error": "No feedback data provided"}))
            sys.exit(1)

        summary_result = generate_summary(feedback_questions)
        print(json.dumps(summary_result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
