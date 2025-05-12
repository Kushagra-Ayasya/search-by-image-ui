import { FaCamera } from "react-icons/fa";

const ImageUpload = () => {
  return (
    <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition">
      <FaCamera className="text-4xl text-gray-600 mb-4" />
      <p className="text-lg font-medium text-gray-700">Upload an image</p>
    </div>
  );
};

export default ImageUpload;
