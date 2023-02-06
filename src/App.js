import React from 'react'
import "./App.css";
import Hero from "./components/Hero";
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import bg_image from "./assets/suskit.webp"
import bamboo_image from "./assets/bamboo_straws.webp"
import toothbrush_image from "./assets/toothbrush.webp"
import loofah_image from "./assets/loofah.webp"
import container_image from "./assets/reusable_container.webp"
import cups_image from "./assets/cups.webp"



function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Contact" },
    { url: "#", title: "Cart" },
  ];

  return (
    <div className='App'>
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={bg_image}/>
      <Slider
        imageSrc={toothbrush_image}
        title={"Bamboo Toothbrush (set of 2)"}
        subtitle={
          "Earthly Bamboo Toothbrush are BPA free, Biodegradable and have charcoal infused bristles that help remove stains effectively. We guarantee your satisfaction. See for yourself!"
        }
      />
      <Slider
        imageSrc={bamboo_image}
        title={"Reusable Bamboo Straws"}
        subtitle={"We collaborated with artisans in Veitnam, Earthly Organic Bamboo Straws are 100% Compostable, Vegan and BPA free. They can be reused, thrown in a compost bin, or even in your backyard. Serve with cold beverages like ice tea, cold coffee and many more. "}
        flipped={true}
      />
      <Slider
        imageSrc={loofah_image}
        title={"Natural Bamboo Loofah"}
        subtitle={
          "Natural loofah sponges actually come from the fruits of vine-growing Luffa plants.These plants are part of the gourd family (Cucurbitaceae) making them relatives of watermelons, cucumbers and pumpkins.When a luffa fruit dries out and is peeled, you are left with its fibrous interior, which can be used as a sponge.It is biodegradable and is an organic, eco-friendly exfoliating body scrubber. Both men and women can use it, suitable for shower and bathtub."
        }
      />
      <Slider
        imageSrc={container_image}
        title={"Plant Based Reusable Containers"}
        subtitle={"Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable containers which can be used hundreds of times.Microwave safe, seal proof, and sturdy, they are perfect to store snacks or lunch.Designed in USA. Tested in Germany."}
        flipped={true}
      />
      <Slider
        imageSrc={cups_image}
        title={"Plant based Reusable Cups"}
        subtitle={
          "Barista's love it!Easy to clean, hassle free and Plant Based.Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times.So, every batch is unique, Just. Like. You"
        }
      />
      
    </div>
  )
}

export default App