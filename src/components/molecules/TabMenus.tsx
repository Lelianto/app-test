import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const contents = [
  {
    tab: "Peaceful and Harmonious",
    description:
      "Avatown is a peaceful and harmonious place where avatars of all shapes and sizes come together to live in unity. Each avatar is unique and full of character, with feathers, scales, or fur that glisten in the sunlight. The avatars roam free in Avatown's lush forests, soaring through the skies or basking in the warm sunshine. The town is a true paradise for avatars, with abundant food, shelter, and care, ensuring that every avatar is healthy and happy.",
  },
  {
    tab: "Vibrant and Colorful",
    description:
      "Avatown is a vibrant and colorful place where avatars rule the roost. Here, you'll find avatars of all kinds, from majestic eagles to tiny hummingbirds, each with their own distinctive features and personalities. The town is alive with the sounds of chirping, singing, and fluttering wings, as the avatars go about their daily lives. The town is adorned with beautiful and intricate structures that reflect the avatars' unique tastes and styles, making Avatown a feast for the eyes.",
  },
  {
    tab: "Magical and Enchanting",
    description:
      "Avatown is a magical and enchanting place, filled with original avatars that will take your breath away. Each avatar is a work of art, with intricate details and vivid colors that make them come to life. The avatars here are not just beautiful to look at, but they possess unique abilities and traits that make them special. Some can fly at incredible speeds, others can breathe fire, and still others can communicate telepathically. Avatown is a place of wonder and adventure, where anything is possible and where every avatar has a story to tell.",
  },
];

const TabMenus = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
      <TabList className="flex justify-around cursor-pointer border-b-2 border-gray-300 mb-4">
        {contents.map((content, index) => (
          <Tab
            key={index}
            className={`text-sm md:text-lg w-full text-center px-4 py-2 ${
              selectedIndex === index ? "bg-gray-200" : ""
            }`}
          >
            {content.tab}
          </Tab>
        ))}
      </TabList>

      {contents.map((content, index) => (
        <TabPanel key={index} className="px-4 text-justify">
          <h2 className="text-xl font-bold">Volume {index + 1}</h2>
          <p className="text-sm md:text-base mt-4">{content.description}</p>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabMenus;
