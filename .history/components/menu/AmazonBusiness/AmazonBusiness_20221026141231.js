import React from "react";
import Menu from "./Menu";

function AmazonBusiness() {
  const AmazonBusiness = [
    {
      id: "1",
      title: "Drive procurement agility",
      image:
        "https://m.com-magazin.de/img/9/9/7/2/3/8/Amazon-Business_w640_h400.jpg",
      description:
        "Arm your organization with increased visibility, more responsible and sustainable options, and greaterefficiencies so your organization can do more.",
    },
  ];
 
  return (
    <div className="flex ">
      {AmazonBusiness.map(({id,title, image, description}) => (
        <Menu
          key={id}
          id={id}
          title={title}
          image={image}
          description={description}
        />
      ))}
    </div>
  );
}

export default AmazonBusiness;
