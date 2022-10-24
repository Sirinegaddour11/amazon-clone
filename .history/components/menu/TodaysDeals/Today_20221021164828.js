import React from "react";
import Menu from "./Menu";

function Today() {
  const TodayDeals = [
    {
      id: "1",
      title: "Enterprise",
      image:
        "https://business.amazon.com/assets/global/images/events/go-big---project-jupiter---2022/phase-1/1885-PJ-AEM-Comp-Female-blog-notification-575x335.jpg.transform/348x208/image.jpg",
      subtitle: "Drive procurement agility",
      description:
        "Make smarter buying decisions and prepare for unexpected disruptions to propel your business forward.",
    },

    {
      id: "2",
      title: "Small business",
      image:
        "https://business.amazon.com/assets/global/images/events/go-big---project-jupiter---2022/phase-1/1885-PJ-AEM-SMB-Female-blog-notification-575x335.jpg.transform/348x208/image.jpg",
      subtitle: "Grow your business",
      description:
        "Save time and money with a wide product selection, business-only pricing, and account features designed for small businesses.",
    },
    {
      id: "2",
      title: "Small business",
      image:
        "https://business.amazon.com/assets/global/images/events/go-big---project-jupiter---2022/phase-1/1885-PJ-AEM-SMB-Female-blog-notification-575x335.jpg.transform/348x208/image.jpg",
      subtitle: "Grow your business",
      description:
        "Save time and money with a wide product selection, business-only pricing, and account features designed for small businesses.",
    },
  ];

  return (
    <div className="grid grid-flow-row-dense   xl:grid-cols-4   mx-auto">
      {TodayDeals.map((a) => (
        <Menu
          key={a.id}
          id={a.id}
          title={a.title}
          image={a.image}
          subtitle={a.subtitle}
          description={a.description}
        />
      ))}
    </div>
  );
}

export default Today;
