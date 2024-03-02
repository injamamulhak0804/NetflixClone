import { API_KEY } from "./constants"
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default openai;