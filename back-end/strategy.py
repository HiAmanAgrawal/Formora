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

def analyze_cross_feedback(feedback_forms):
    formatted_feedback = ""
    for i, form in enumerate(feedback_forms, 1):
        formatted_feedback += f"\n### Feedback Form {i} ###\n"
        formatted_feedback += "\n".join([f"- {q['question']}: {q['answer']}" for q in form['questions']])
        formatted_feedback += "\n\n"

    prompt = f"""
    Analyze the following multiple feedback forms to identify common themes, strengths, weaknesses, and provide a strategy to improve. 
    Return **only JSON**—no explanations, introductions, or additional text.

    JSON format:
    {{
      "common_themes": [],
      "strengths": [],
      "weaknesses": [],
      "strategic_recommendations": []
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
        if not input_data or len(input_data) < 2:
            print(json.dumps({"error": "Not enough feedback forms for analysis"}))
            sys.exit(1)

        analysis_result = analyze_cross_feedback(input_data)
        print(json.dumps(analysis_result, indent=2))
    
    except json.JSONDecodeError:
        print(json.dumps({"error": "Invalid JSON input"}))
        sys.exit(1)
    
    except Exception as e:
        print(json.dumps({"error": f"Unexpected error: {str(e)}"}))
        sys.exit(1)
