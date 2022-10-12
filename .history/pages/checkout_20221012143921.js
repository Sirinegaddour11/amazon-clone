/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React from 'react'
import Header from '../components/Header'

function checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div>
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div>
<h1>Your Sho</h1>

          </div>
        </div>
      </main>
    </div>
  );
}

export default checkout
