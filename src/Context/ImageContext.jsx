import { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <ImageContext.Provider value={{ uploadedImage, setUploadedImage }}>
      {children}
    </ImageContext.Provider>
  );
};
