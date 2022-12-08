const onSubmit = (e) => {
  e.preventDefault();

  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;
  const qty = document.querySelector("#qty").value;

  if (prompt === "") {
    alert("Need a prompt");
    return;
  }

  console.log('success')
  generateImageRequest(prompt, size, qty);
};

const generateImageRequest = async (prompt, size, qty) => {
    try {
        updateMessage("Retrieving...")

        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size,
                qty
            })
        });

        updateMessage("");

        if (response.ok){
            const data = await response.json();
            console.log(data);

            const imageUrl = data.data;

            updateImage(imageUrl);            
        }
        else {
            throw new Error("Image could not  be generated")
        }
    } catch (e) {
        updateMessage(e);
    }
}

const updateMessage = (msg) => {
    document.querySelector("#msg").textContent = msg;
}

const updateImage = (imgSrc, alt) => {
    document.querySelector("#img").src = imgSrc;
    document.querySelector("#img").alt = alt;
}

document.querySelector("#form").addEventListener("submit", onSubmit);
