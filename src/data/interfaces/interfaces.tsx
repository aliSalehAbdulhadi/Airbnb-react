export interface homeCard {
  id: string;
  title: string;
  host: string;
  price: string;
  date: string;
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
}

export interface reviewSection {
  reviews: {
    name: string;
    rating: string;
    image?: string;
    comment: string;
    date: string;
  }[];

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
}

export interface reservationSide {
  price: string;
  rating: string;
  reviews: string;
}
