import React from 'react'

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
const contactList = [
                  "support@cryptoking.com",
                  "info@example.com",
                  "Contact Us",
                  ];
const usefullLink = ["Home", "About Us", "Company Bio"];
  return (
    <footer class="text-center text-white backgroundMain lg:text-left">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md: justify-start">
              Crypto King
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
          </div>
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md: justify-start">
              Products
              </h6>
            {productList.map((el,i) =>(
              <p class ="mb-4" key={i+1}>
              <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md: justify-start">
              Useful links
              </h6>
            {usefullLink.map((el,i) =>(
              <p class ="mb-4" key={i+1}>
              <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md: justify-start">
              Contact
              </h6>
            {contactList.map((el,i) =>(
              <p class ="mb-4" key={i+1}>
              <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div class="backgroundMain p-6 text-center">
        <span>© 2024 Copyright: </span>
          <a class="font-semibold " href="https://tailwind-elements.com/">
            Crypto King
          </а>
      </div>
    </footer>
  );
};
export default Footer
