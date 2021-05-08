import { Pagination } from './pagination';

export type Restaurant = {
  id: string;
  description: string;
  image: string;
  logo: string;
  name: string;
  opening_hours: string;
  payment_methods: string;
  price_range: string;
  telephone: string;
  website: string;
};

export type RestaurantsResponse = {
  data: Restaurant[];
  pagination: Pagination;
  success: boolean;
};

export type RestaurantResponse = {
  data: Restaurant;
  success: boolean;
};
