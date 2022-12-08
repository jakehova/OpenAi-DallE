const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const { prompt, size, qty } = req.body;
  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  const n = parseInt(qty);

  try {
    const response = await openai.createImage({
      prompt,
      n,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (e) {
    if (e.response) {
      console.log(e.response.status);
      console.log(e.response.data);
    } else {
      console.log(e.message);
    }

    res.status(400).json({
      success: false,
      error: "Image couldnt be generated: " + prompt + ":" +qty + ":" +size + ":" + e.message,
    });
  }
};

module.exports = { generateImage };
