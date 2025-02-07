import sys
import json
import os
import re
from groq import Groq

def extract_json(text):
    """Extracts valid JSON from a response string."""
    match = re.search(r'\{.*\}', text, re.DOTALL)
    if match:
        try:
            return json.loads(match.group(0))
        except json.JSONDecodeError:
            return {"error": "AI response did not contain valid JSON"}
    return {"error": "No JSON found in AI response"}

def analyze_feedback(feedback_data):
    formatted_feedback = "\n".join([f"- {q['question']}: {q['answer']}" for q in feedback_data])

    prompt = f"""
Analyze the following feedback responses and generate a structured summary. Extract insights based on sentiment, urgency, and common themes. 
Return **only JSON**—no explanations, introductions, or additional text.

JSON format:
{{
  "positiveResponses": {{
    "total": 0,
    "percentageChange": "0%",
    "chartData": {{
      "labels": [],
      "values": []
    }}
  }},
  "negativeResponses": {{
    "total": 0,
    "percentageChange": "0%",
    "chartData": {{
      "labels": [],
      "values": []
    }}
  }},
  "responseTrend": {{
    "labels": [],
    "values": []
  }},
  "sentiment": {{
    "positive": 0,
    "negative": 0,
    "neutral": 0
  }},
  "salesOverTime": {{
    "labels": [],
    "values": []
  }},
  "salesRefund": {{
    "sales": 0,
    "refunds": 0
  }},
  "reasons": [],
  "recentActivity": []
}}
"""

    # Initialize Groq AI
    api_key = "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" 
    client = Groq(api_key=api_key) 

    try:
        response = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[{"role": "system", "content": prompt},
                      {"role": "user", "content": formatted_feedback}],
            temperature=0.2
        )
        result_text = response.choices[0].message.content
        return extract_json(result_text)

    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    try:
        # Validate that the input is passed correctly as a JSON string
        if len(sys.argv) < 2:
            print(json.dumps({"error": "Missing input data. Please provide JSON formatted data as a command-line argument."}))
            sys.exit(1)

        # Parse the input JSON
        input_data = json.loads(sys.argv[1])

        # Check if the "questions" key is present
        if "questions" not in input_data:
            print(json.dumps({"error": "Invalid input format. Ensure 'questions' key is present with an array of questions and answers."}))
            sys.exit(1)

        # Proceed with analyzing the feedback
        feedback_data = input_data["questions"]
        output = analyze_feedback(feedback_data)
        print(json.dumps(output))  # Ensure only valid JSON is printed

    except json.JSONDecodeError:
        print(json.dumps({"error": "Invalid JSON format. Please ensure the input is valid JSON."}))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
