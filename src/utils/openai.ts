import { OpenAI } from 'openai';

const openai = new OpenAI(
    {
        apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
        dangerouslyAllowBrowser: true
    }
);

export default openai;