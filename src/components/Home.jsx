import shortid from "shortid";
import Product from "./Product";

const Home = () => {
  return (
    <div className="max-w-[1500px]">
      <img src="/public/assets/home.jpg" alt="background-image" />
      <div className="p-5 bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-5">
          <Product
            id={shortid.generate()}
            image="/public/assets/products/4.png"
            price={260}
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image="/public/assets/products/5.png"
            price={199}
            title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
            rating={5}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5 ">
          <Product
            id={shortid.generate()}
            image="/public/assets/products/1.png"
            price={65}
            title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image="/public/assets/products/2.png"
            price={845}
            title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image="/public/assets/products/3.png"
            price={270}
            title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
            rating={5}
          />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <Product
            id={shortid.generate()}
            image="/public/assets/products/6.png"
            price={200}
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
