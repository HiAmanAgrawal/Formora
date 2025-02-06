import sys
import json
import os
import re
from groq import Groq

def extract_json(text):
    """Extracts the first valid JSON object from a given text string."""
    match = re.search(r'\{.*\}', text, re.DOTALL)
    if match:
        return match.group(0)
    return None

def analyze_feedback(feedback_data):
    formatted_feedback = "\n".join([f"- {q['question']}: {q['answer']}" for q in feedback_data])

    prompt = f"""
    Analyze the following feedback responses and structure the results into the specified categories. 
    Return **only JSON**—no explanations, introductions, or additional text.

    JSON format:
    {{
      "overview": {{
        "total_forms": 0,
        "sentiment_distribution": {{"positive": 0, "negative": 0, "neutral": 0}},
        "category_distribution": {{"urgent": 0, "negative_feedback": 0, "positive_feedback": 0, "other": 0}},
        "common_themes": []
      }},
      "urgent_requirements": [],
      "negative_feedback": [],
      "positive_feedback": [],
      "other_insights": [],
      "recommendations": []
    }}

    Feedback Data:
    {formatted_feedback}
    """

    api_key = os.getenv("GROQ_API")
    if not api_key:
        return {"error": "API key not found"}

    try:
        client = Groq(api_key=api_key)
        chat_completion = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model="llama3-8b-8192"
        )
        
        raw_response = chat_completion.choices[0].message.content
        json_text = extract_json(raw_response)

        if not json_text:
            return {"error": "AI did not return valid JSON"}

        return json.loads(json_text)

    except json.JSONDecodeError:
        return {"error": "Invalid JSON output from AI"}
    except Exception as e:
        return {"error": f"AI API error: {str(e)}"}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.argv[1])
        feedback_questions = input_data.get("questions", [])

        if not feedback_questions:
            print(json.dumps({"error": "No feedback data provided"}))
            sys.exit(1)

        analysis_result = analyze_feedback(feedback_questions)
        print(json.dumps(analysis_result, indent=2))
    
    except json.JSONDecodeError:
        print(json.dumps({"error": "Invalid JSON input"}))
        sys.exit(1)
    
    except Exception as e:
        print(json.dumps({"error": f"Unexpected error: {str(e)}"}))
        sys.exit(1)
