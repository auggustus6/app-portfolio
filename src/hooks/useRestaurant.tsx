import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
import {
  Restaurant,
  RestaurantResponse,
  RestaurantsResponse,
} from 'utils/types/restaurant';
import api from '../services/api';

type RestaurantContextProps = {
  restaurants: Restaurant[];
  restaurant: Restaurant | null;
  loading: boolean;
  loadRestaurants: (search?: string) => Promise<void>;
  loadRestaurant: (restaurantId: string) => Promise<void>;
};

type RestaurantProviderProps = {
  children: React.ReactNode;
};
const RestaurantContext = createContext({} as RestaurantContextProps);

export const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleError = () => {
    setLoading(false);
    Alert.alert('Ops, algo aconteceu!', 'Tente novamente mais tarde');
  };

  const loadRestaurants = async (search = '') => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const response = await api.get(
        `restaurants?page=${page}&limit=10&search=${search}`,
      );
      const { data, success }: RestaurantsResponse = response.data;

      if (success) {
        setRestaurants([...restaurants, ...data]);
        setPage(page + 1);
      }
      setLoading(false);
    } catch (err) {
      handleError();
    }
  };

  const loadRestaurant = async (restaurantId: string) => {
    setLoading(true);
    try {
      const response = await api.get(`restaurants/${restaurantId}`);
      const { data, success }: RestaurantResponse = response.data;

      if (success) {
        setRestaurant(data);
      }
      setLoading(false);
    } catch (err) {
      handleError();
    }
  };

  const values = {
    restaurants,
    restaurant,
    loading,
    // Functions
    loadRestaurants,
    loadRestaurant,
  };

  return (
    <RestaurantContext.Provider value={values}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  return useContext(RestaurantContext);
};
