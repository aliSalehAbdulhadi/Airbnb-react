import { v4 as uuidv4 } from 'uuid';

const ImageSection = ({ images }: { images: any }) => {
  return (
    <div className="flex w-auto h-[400px] md:h-[500px] rounded-xl overflow-hidden mt-10">
      <div className="w-[50%] mr-1 ">
        <img
          className="w-[100%] h-[100%] object-cover cursor-pointer"
          src={images[1]?.webformatURL}
          alt=""
        />
      </div>
      <div className="w-[50%]  grid grid-cols-2 grid-rows-2 gap-1">
        {[...Array(4)].map((_, i) => (
          <img
            key={uuidv4()}
            className="w-[100%] h-[100%] object-cover cursor-pointer"
            src={images[i + 2]?.webformatURL}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
