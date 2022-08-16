import { v4 as uuidv4 } from 'uuid';
import { FetchImages } from '../utilities/fetchImages';
import data from './data.json';

const Data = () => {
  const randomNum = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const { images, error } = FetchImages();

  const randomNumBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const sameNum = randomNumBetween(1, data.countries.length);

  const dataObj = {
    id: uuidv4(),
    title: 'Vakthusøyen - Nybryggen - on a small island',
    host: `${data.names[randomNum(data.names.length)]} ${
      data.names[randomNum(data.names.length)]
    }`,
    joined: `${data.months[randomNum(12)]} 201${randomNum(9)}`,
    price: `$${randomNumBetween(100, 400)}`,
    images: images,
    location: `${data.countries[sameNum]?.name}, ${data.countries[sameNum]?.capital} `,
    totalReview: `${randomNum(50)}`,
    rating: `${randomNumBetween(2, 5)}`,
    date: `${data.monthsShort[randomNum(12)]} ${randomNumBetween(
      1,
      31,
    )}-${randomNumBetween(1, 31)}`,
    reviews: [
      {
        name: `${data.names[randomNum(data.names.length)]} ${
          data.names[randomNum(data.names.length)]
        }`,
        rating: '5',
        image: 'villa',
        comment:
          'This is a great place to stay. I would highly recommend this place.',
        date: `${data.months[randomNum(12)]} 2015${randomNum(4)}`,
      },
      {
        name: `${data.names[randomNum(data.names.length)]} ${
          data.names[randomNum(data.names.length)]
        }`,
        rating: '4',
        image: 'villa',
        comment:
          'This is a great place to stay. I would highly recommend this place.',
        date: `${data.months[randomNum(12)]} 2015${randomNum(4)}`,
      },
    ],
    roomInfo: {
      bedrooms: `${randomNumBetween(1, 4)}`,
      bathrooms: `${randomNumBetween(1, 3)}`,
      guests: `${randomNumBetween(1, 6)}`,
      beds: `${randomNumBetween(1, 5)}`,
      baths: `${randomNumBetween(1, 3)}`,
    },
    coHosts: [
      {
        name: `${data.names[randomNum(data.names.length)]} ${
          data.names[randomNum(data.names.length)]
        }`,
        image: 'villa',
        reviews: [
          {
            name: 'John Doe',
            image: 'villa',
          },
          {
            name: 'Jane Doe',
            image: 'villa',
          },
        ],
      },
      {
        name: `${data.names[randomNum(data.names.length)]} ${
          data.names[randomNum(data.names.length)]
        }`,
        image: 'villa',
        reviews: [
          {
            name: 'John Doe',
            image: 'villa',
          },
          {
            name: 'Jane Doe',
            image: 'villa',
          },
        ],
      },
    ],
  };
  return dataObj;
};

export default Data;
