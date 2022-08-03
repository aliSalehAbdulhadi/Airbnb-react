const ImageSection = () => {
  return (
    <div className="flex h-[35rem] rounded-md overflow-hidden mt-10">
      <div className="w-[50%] mr-1 ">
        <img
          className="w-[100%] h-[100%] object-cover "
          src="/images/image.webp"
          alt=""
        />
      </div>
      <div className="w-[50%]  grid grid-cols-2 grid-rows-2 gap-1">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            className="w-[100%] h-[100%] object-cover "
            src="/images/image.webp"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
