/* eslint-disable prettier/prettier */
export type RealStateData = {
  id: string;
  address: AddressRealState;
  images: string[];
  price: number;
  bathrooms: number;
  bedrooms: number;
  parkingSpaces: number;
  usableArea: number;
  publish: boolean;
};

export type AddressRealState = {
  formattedAddress:string;
  geolocation: {
    lat: number;
    lng: number;
  }
}
