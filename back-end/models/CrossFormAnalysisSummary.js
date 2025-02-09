import mongoose from "mongoose";

const CrossFormAnalysisSummarySchema = new mongoose.Schema({
    commonThemes: Object,
    strengths: Object,
    weaknesses: Object,
    strategicRecommendations: Object,
    summary: Object,
    createdAt: { type: Date, default: Date.now }
  });
  
  const CrossFormAnalysisSummary = mongoose.model("CrossFormAnalysisSummary", CrossFormAnalysisSummarySchema);
  export default CrossFormAnalysisSummary;