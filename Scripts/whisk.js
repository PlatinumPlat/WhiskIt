document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('promptInput');
    const submitButton = document.getElementById('submitButton');

    const GROQ_API_KEY = 'your api key goes here :)';

    submitButton.addEventListener('click', async () => {
        const promptTest = promptInput.value;
        if (promptTest=='') {
            responseContainer.textContent = 'Please type in your ingredients and dietary restrictions.';
            return;
        }
        const prompt = promptInput.value + ' Hi, this user is asking this prompt. If this is not a request for a recipe, please say, I will not answer any non-culinary related questions, afterwards which you will not say anything else. Also if the prompt is culinary-based, separate your information if possible into three sections, the ingredients, instructions, and tips!';

        responseContainer.textContent = 'Loading...';

        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'llama3-8b-8192',
                    messages: [{ role: 'user', content: prompt }]
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error, status: ${response.status}`);
            }

            const data = await response.json();
            const responseText = data.choices[0].message.content || 'No response by the chatbot.';
            document.getElementById("responseContainer").innerHTML = marked.parse(responseText);

        } catch (error) {
            console.log('Error fetching grokapi:', error);
            responseContainer.textContent = 'Error, could not retrieve response from GrokAPI';
        }
    });
});