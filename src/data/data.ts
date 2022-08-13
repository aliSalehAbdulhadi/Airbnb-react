import { v4 as uuidv4 } from "uuid";

export const data = () => {
  const dataObj = {
    id: uuidv4(),
    title: "Vakthusøyen - Nybryggen - on a small island",
    host: "Jaime Jannister",
    joined: "April 2018",
    price: "$300",
    image: "villa",
    location: "Nordland, Norway",
    totalReview: "34",
    rating: "4",
    reviews: [
      {
        name: "John Doe",
        rating: "5",
        image: "villa",
        comment:
          "This is a great place to stay. I would highly recommend this place.",
        date: "July 2022",
      },
      {
        name: "Jane Doe",
        rating: "4",
        image: "villa",
        comment:
          "This is a great place to stay. I would highly recommend this place.",
        date: "July 2022",
      },
    ],
    roomInfo: {
      bedrooms: "2",
      bathrooms: "2",
      guests: "4",
      beds: "2",
      baths: "2",
    },
    coHosts: [
      {
        name: "Fatima Saleh",
        image: "villa",
        reviews: [
          {
            name: "John Doe",
            image: "villa",
          },
          {
            name: "Jane Doe",
            image: "villa",
          },
        ],
      },
      {
        name: "Sanaa Jabbar",
        image: "villa",
        reviews: [
          {
            name: "John Doe",
            image: "villa",
          },
          {
            name: "Jane Doe",
            image: "villa",
          },
        ],
      },
    ],
  };
  return dataObj;
};
