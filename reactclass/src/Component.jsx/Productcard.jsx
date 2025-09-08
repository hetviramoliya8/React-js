import React from 'react';
import Card from './Card';

const card = [
  { id: 1, image: "bag-1.png", title: "Backpack Sandra", price: 550, rating: 4.5 },
  { id: 2, image: "bag-2.png", title: "Backpack Emily", price: 650, rating: 4.5 },
  { id: 3, image: "bag-3.png", title: "Backpack Natalie", price: 750, rating: 4.5 },
  { id: 4, image: "bag-4.png", title: "Backpack Lily", price: 850, rating: 4.5 },
  { id: 5, image: "bag-5.png", title: "Bag Sandra", price: 950, rating: 4.5 },
  { id: 6, image: "bag-6.png", title: "Bag Jenny", price: 1150, rating: 4.5 },
  { id: 7, image: "bag-7.png", title: "Bag Fancy", price: 2000,},
  { id: 8, image: "bag-8.png", title: "Bag Emwily", price: 2500}
];

export default function Productcard() {
  return (
    <div className='Productcard flex flex-wrap justify-center mb-10'>
      {card.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
