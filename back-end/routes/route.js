import express from 'express';
import { spawn } from 'child_process';
import mongoose from 'mongoose';

const routes = express.Router();

// Define Feedback Schema
const feedbackSchema = new mongoose.Schema({
    questions: [
        {
            question: String,
            answer: mongoose.Schema.Types.Mixed
        }
    ],
    summary: mongoose.Schema.Types.Mixed, 
    createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// 📌 Route to store feedback & generate AI summary
routes.post('/generate-summary', async (req, res) => {
    const inputData = req.body;

    // Ensure inputData is valid
    if (!inputData || !Array.isArray(inputData.questions) || inputData.questions.length === 0) {
        return res.status(400).json({ error: 'Invalid input data. Provide an array of questions and answers.' });
    }

    // Spawn Python process
    const pythonProcess = spawn('python3', ['try.py', JSON.stringify(inputData)]);

    let outputData = '';

    pythonProcess.stdout.on('data', (data) => {
        outputData += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error('Python Error:', data.toString());
    });

    pythonProcess.on('close', async (code) => {
        console.log('Raw Python Output:', outputData);

        if (!outputData.trim()) {
            return res.status(500).json({ error: 'No response from Python script' });
        }

        try {
            const jsonResponse = JSON.parse(outputData.trim());

            // Save feedback & AI-generated summary in MongoDB
            const newFeedback = new Feedback({
                questions: inputData.questions,
                summary: jsonResponse.summary
            });

            await newFeedback.save();
            res.json({ message: 'Feedback stored successfully', summary: jsonResponse.summary });

        } catch (error) {
            console.error('JSON Parse Error:', error.message);
            res.status(500).json({ error: 'Invalid JSON from Python script' });
        }
    });
});

// 📌 Route to get all stored feedback
routes.get('/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 }); // Get latest first
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving feedback' });
    }
});

export default routes;

