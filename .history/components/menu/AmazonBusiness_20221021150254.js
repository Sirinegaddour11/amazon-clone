import React from 'react'
import Menu from './Menu';

function AmazonBusiness() {

      const AmazonBusiness = [
        {
          id: "1",
          title: "Drive procurement agility",
          image:
            "https://m.com-magazin.de/img/9/9/7/2/3/8/Amazon-Business_w640_h400.jpg",
            description :
        },
      ];
  return (
    <div className="flex">
      {AmazonBusiness.map((a) => (
        <Menu key={a.id} id={a.id} title={a.title} image={a.image} />
      ))}
      <p>
         Arm your organization with increased
        visibility, more responsible and sustainable options, and greater
        efficiencies so your organization can do more.
      </p>
    </div>
  );
}

export default AmazonBusiness
