import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';

interface Props {
  onImageProcessed: (text: string) => void;
}

export default function ImageUpload({ onImageProcessed }: Props) {
  const processImage = useCallback(async (file: File) => {
    console.log('Processing image...');
    try {
      const { data: { text } } = await Tesseract.recognize(file, 'eng', {
        logger: (m) => console.log(m),
      });
      console.log('Text extracted:', text);
      onImageProcessed(text); // Pass extracted text to parent
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Failed to process the image. Please try again.');
    }
  }, [onImageProcessed]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      console.log('File accepted:', acceptedFiles[0]);
      processImage(acceptedFiles[0]);
    }
  }, [processImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.gif'], // Specify MIME types and extensions
    },
  });

  return (
    <div {...getRootProps()} className="dropzone" style={styles.dropzone}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <p>Drag & drop an image, or click to select one</p>
      )}
    </div>
  );
}

const styles = {
  dropzone: {
    border: '2px dashed #ccc',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center' as const,
    cursor: 'pointer',
  },
};
