const ReviewCard = () => {
  return (
    <div className="min-h-[250px] w-[600px] p-2">
      <div className="flex">
        <div className="h-10 w-10 rounded-[50%] overflow-hidden mr-3">
          <img
            className="h-[100%] w-[100%] object-cover"
            src="/images/image.webp"
            alt=""
          />
        </div>
        <div>
          <h1>Bardley-Anne</h1>
          <h2 className="text-sm opacity-60">July 2022</h2>
        </div>
      </div>
      <div className=" mt-5 font-cerealNormal w-[70%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        necessitatibus magnam delectus nam voluptatum quidem perferendis odit
        rem, aperiam quae cum debitis, quod necessitatibus...
      </div>
      <button className="mt-3 underline font-cerealMedium">Show more</button>
    </div>
  );
};

export default ReviewCard;
