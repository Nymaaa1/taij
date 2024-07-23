import React from "react";
import images from "@/app/components/images/rooms/big_image_1.jpg";
import Image from "next/image";

interface Images {
  src: string;
}
const Huhsuvd: React.FC = () => {
  return (
    <>
      <section className="about">
        <div className="container flex mtop">
          <div className="left row">
            {/* <Heading title="Хөхсувд" subtitle="ОРОН СУУЦНЫ БАРИЛГА" /> */}
            <p>
              Хотын төв цэг Сүхбаатарын талбайгаас ердөө 3 км зайд, нийслэлийн
              хамгийн цэнгэг агаартай бүсэд, Үндэсний цэцэрлэгт хүрээлэнгийн
              баруун талд буюу үнэ цэнэ нь хэзээ ч буурахгүй, хамгийн ашигтай
              байршилд байрлана.
            </p>
            <p>
              Хөх Сувд тансаг зэрэглэлийн орон сууцны хотхон нь Монголд анх удаа
              Франц архитекторын зураг төслөөр, Герман инженерийн хяналт дор
              баригдсан гэдгээрээ онцлог. Бүтээн байгуулалтын чанар төдийгүй
              загвар дизайнд ийнхүү онцгой анхаарснаас гадна таван одтой зочид
              буудлын жишиг үйлчилгээг оршин суугчдадаа үзүүлдгээрээ бид
              Монголын зах зээлд цоо шинэ жишиг анхлан тогтоолоо.
            </p>
          </div>
          
        </div>
        <div className="container flex mtop">
          <div className="left row">
            {/* <Heading subtitle="'A' 2 өрөө орон сууц 66.44м2" /> */}

            <p>
              Та QR кодыг уншуулан 3D гээр харах боломжтой. Энэхүү байр нь европ
              чанар стандартын дагуу баригдаж байгаа, төвийн ус дулаантай
              холбогдсон.
            </p>
          </div>
          <div className="right row">
            <Image src={images.src} alt="" />
          </div>
        </div>
        <div className="container flex mtop">
          <div className="left row">
            {/* <Heading subtitle="'B' 2 өрөө орон сууц 47.80м2" /> */}
            <p>
              Та QR кодыг уншуулан 3D гээр харах боломжтой. Энэхүү байр нь европ
              чанар стандартын дагуу баригдаж байгаа, төвийн ус дулаантай
              холбогдсон.
            </p>
          </div>
          <div className="right row">
            <Image src={images.src} alt="" />
          </div>
        </div>
        <div className="container flex mtop">
          <div className="left row">
            {/* <Heading subtitle="'B' 3 өрөө орон сууц 66.19м2" /> */}
            <p>
              Та QR кодыг уншуулан 3D гээр харах боломжтой. Энэхүү байр нь европ
              чанар стандартын дагуу баригдаж байгаа, төвийн ус дулаантай
              холбогдсон.
            </p>
          </div>
          <div className="right row">
            <Image src={images.src} alt="" />
          </div>
        </div>
        <div className="container flex mtop">
          <div className="left row">
            {/* <Heading subtitle="'Г' 1 өрөө орон сууц 33.43м2" /> */}
            <p>
              Та QR кодыг уншуулан 3D гээр харах боломжтой. Энэхүү байр нь европ
              чанар стандартын дагуу баригдаж байгаа, төвийн ус дулаантай
              холбогдсон.
            </p>
          </div>
          <div className="right row">
            <Image src={images.src} alt="" />
          </div>
        </div>
        <div className="container flex mtop">
          <div className="left row">
            {/* <Heading subtitle="'Д' 2 өрөө орон сууц 48.09м2" /> */}
            <p>
              Та QR кодыг уншуулан 3D гээр харах боломжтой. Энэхүү байр нь европ
              чанар стандартын дагуу баригдаж байгаа, төвийн ус дулаантай
              холбогдсон.
            </p>
          </div>
          <div className="right row">
            <Image src={images.src} alt="" />
          </div>
        </div>
        <div className="container flex mtop">
          <div className="left row">
            {/* <Heading subtitle="'Е' 1 өрөө орон сууц 36.03м2" /> */}
            <p>
              Та QR кодыг уншуулан 3D гээр харах боломжтой. Энэхүү байр нь европ
              чанар стандартын дагуу баригдаж байгаа, төвийн ус дулаантай
              холбогдсон.
            </p>
          </div>
          <div className="right row">
            <Image src={images.src} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Huhsuvd;

// export default About
