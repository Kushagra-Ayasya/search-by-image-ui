import ImageUpload from "../Components/ImageSearch/ImageUpload";
import SearchInput from "../Components/ImageSearch/SearchInput";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 ml-130">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Search by image</h1>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Upload an image to find matching products, or search by keyword.
      </p>

      {/* Center this inner box */}
      <div className="w-full max-w-sm mx-auto flex flex-col items-center">
        <ImageUpload />
        <div className="text-center text-black font-bold my-4">or</div>
        <SearchInput />
      </div>
    </div>
  );
};

export default Home;
