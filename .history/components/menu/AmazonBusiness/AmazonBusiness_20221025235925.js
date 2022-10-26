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
  console.log("amazone", AmazonBusiness);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 lg:-mt-52 mx-auto ">
      {AmazonBusiness.slice(3, 3).map((a) => (
        <Menu
          key={a.id}
          id={a.id}
          title={a.title}
          image={a.image}
          description={a.description}
        />
      ))}
    </div>
  );
}

export default AmazonBusiness;
