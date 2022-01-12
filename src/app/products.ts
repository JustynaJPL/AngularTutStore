export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image: './assets/phone1.jpg'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image: './assets/phone2.jpg'
  },
  {
    id: 3,
    name: 'Phone Standard ',
    price: 299,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    image: './assets/phone3.jpg'
  },
  {
    id: 4,
    name: 'XYZ',
    price: 825,
    description: 'New super duper model Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    image: './assets/phone4.jpg'
  }
];
