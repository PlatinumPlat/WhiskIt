document.getElementById("generate").addEventListener("click", async () => {
    const prompt = document.getElementById("prompt").value;
    document.getElementById("output").innerText = "Loading...";
    const API_KEY = document.getElementById("stability").value;

    try {
        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("aspect_ratio", "1:1");
        formData.append("output_format", "png");

        const response = await fetch("https://api.stability.ai/v2beta/stable-image/generate/ultra", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Accept": "image/*"
            },
            body: formData
        });

        if (!response.ok) throw new Error(await response.text());

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        document.getElementById("output").innerHTML = `<img src="${url}">`;
    } catch (err) {
        document.getElementById("output").innerText = "Error: " + err.message;
    }
});
