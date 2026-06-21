import { GoogleGenerativeAI } from "@google/generative-ai";

console.log(
  "API KEY:",
  import.meta.env.VITE_GEMINI_KEY
);

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_KEY
  
);

export const analyzeResume = async (resumeText) => {

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  });

  const prompt = `
Analyze this resume.

Give:

1. ATS Improvements
2. Missing Skills
3. Professional Summary

Resume:

${resumeText}
`;

  const result = await model.generateContent(prompt);
 

  return result.response.text();
};