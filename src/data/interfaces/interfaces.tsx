export interface homeCard {
  id: string;
  location: string;
  host: string;
  price: string;
  date: string;
  rating: string;
}

export interface titleSection {
  title: string;
  rating: string;
  reviewLength: number;
  location: string;
}

export interface aboutSection {
  roomInfo: {
    bedrooms: string;
    bathrooms: string;
    guests: string;
    beds: string;
    baths: string;
  };
  host: string;
  price: string;
  reviews: string;
  rating: string;
  hostImage: any;
  images: any;
}

export interface reviewSection {
  reviews: {
    name: string;
    rating: string;
    image?: string;
    comment: string;
    date: string;
  }[];
  images: any;
  rating: string;
}

export interface reviewCard {
  review: {
    name: string;
    rating: string;
    image?: string;
    comment: string;
    date: string;
  };

  image: any;
}

export interface hostInfo {
  host: string;
  totalReviews: any;
  joined: string;
  coHosts: {
    name: string;
    image?: string;
    reviews: { name: string; image?: string }[];
  }[];
  hostImage: any;
  images: any;
}

export interface reservationSide {
  price: string;
  rating: string;
  reviews: string;
}
