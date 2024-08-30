import { Request, Response } from 'express';
import { downloadImage } from '../service/apiServices';
import { generateContent } from '../service/geminiService';
import { v4 as uuidv4 } from 'uuid';

export async function handleUpload(req: Request, res: Response) {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error_code: 'INVALID_DATA', error_description: 'Image URL is required' });
    }

    const imageBuffer = await downloadImage(imageUrl);
    const imageBase64 = imageBuffer.toString('base64');

    const prompt = "Extract the following details from the image: Measurement Number, Measurement Type, and Client Code.";
    const imagePayload = {
      inlineData: {
        data: imageBase64,
        mimeType: 'image/png',
      },
    };

    const responseText = await generateContent(prompt, imagePayload);

    const measurementNumberMatch = responseText.match(/Measurement Number:\s*(\d+)/);
    const measurementTypeMatch = responseText.match(/Measurement Type:\s*([\w\s]+)/);
    const clientCodeMatch = responseText.match(/Client Code:\s*([\w\s]+)/);

    const measurementNumber = measurementNumberMatch ? measurementNumberMatch[1] : 'Not available';
    const measurementType = measurementTypeMatch ? measurementTypeMatch[1].trim() : 'Not available'; // Remove espaços em branco
    const clientCode = clientCodeMatch ? clientCodeMatch[1].trim() : 'Not available'; // Remove espaços em branco

    const measureUuid = uuidv4();

    res.json({
      image_url: imageUrl,
      measure_value: parseInt(measurementNumber), // Assumindo que o valor numérico é extraído da medição
      measure_uuid: measureUuid,
    });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ error_code: 'INTERNAL_ERROR', error_description: 'Internal server error' });
  }
}
