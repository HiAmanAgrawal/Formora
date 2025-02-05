

import React from "react";

const data = {
  items: [
    { image: "https://th.bing.com/th?id=OIP.0-ntzOh67nfZEwXerSHPtAHaHa&w=250&h=250&c=8&rs=1&qlt=90&pcl=1b1a19&o=6&dpr=1.5&pid=3.1&rm=2", link: "https://example.com/1" },
    { image: "https://th.bing.com/th?id=OIP.lQ2yzXhx2F35rhUtct4twAHaFX&w=293&h=212&c=8&rs=1&qlt=90&pcl=1b1a19&o=6&dpr=1.5&pid=3.1&rm=2", link: "https://example.com/2" },
    { image: "https://th.bing.com/th/id/OIP.AxKwZQh13HqkYVnjv_AZDwHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.5", link: "https://example.com/3" },
    { image: "https://th.bing.com/th/id/OIP.cgZSjP_2gM0T_ESrorl95QAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.5", link: "https://example.com/4" },
    { image: "https://th.bing.com/th/id/OIP.O3bUnXr7mppCSN8s5krMDQHaFj?pid=ImgDet&w=179&h=134&c=7&dpr=1.5", link: "https://example.com/5" },
    { image: "https://th.bing.com/th/id/OIP.hXk1YCfcwUebedUgHi7pVgHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.5", link: "https://example.com/6" }
  ]
};

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.items.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
          <img
            src={item.image}
            alt={`Image ${index + 1}`}
            className="w-32 h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;

  