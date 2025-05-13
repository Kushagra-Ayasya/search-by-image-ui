import { useState } from "react";
import ImageCropper from "./ImageCropper";
import { useImage } from "../../Context/ImageContext";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

const ImageUpload = () => {
  const [tempImage, setTempImage] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false); // 🔴 New
  const { setUploadedImage } = useImage();
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTempImage(imageUrl);
      setShowCropper(true);
    }
  };

  const handleCropComplete = (croppedUrl) => {
    setUploadedImage(croppedUrl);
    setIsAnalyzing(true);        // 🔴 Show spinner
    setShowCropper(false);       // Close cropper

    // Fake delay before navigating
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate("/results");
    }, 2000); // adjust delay if needed
  };

  return (
    <>
      <label
        htmlFor="image-upload"
        className="border-2 border-dashed border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition"
      >
        <FaCamera className="text-4xl text-gray-600 mb-4" />
        <p className="text-lg font-medium text-gray-700">Upload an image</p>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>

      {showCropper && (
        <ImageCropper imageSrc={tempImage} onComplete={handleCropComplete} />
      )}

      {isAnalyzing && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="w-[600px] h-[500px] bg-white rounded-xl border border-black flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-6"></div>
            <h2 className="text-xl font-semibold text-gray-700">Analyzing image...</h2>
            <p className="text-gray-500 mt-2">This may take a few seconds</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageUpload;
