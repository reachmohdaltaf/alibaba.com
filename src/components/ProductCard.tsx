import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

const ProductCard = ({ Product }) => {
  console.log(Product);
  return (
    <Card className="container cursor-pointer rounded-sm gap-2 w-72 h-[500px] border">
      <CardHeader>
        <Image
          height={90}
          className=" !w-full transition duration-50 hover:scale-110"
          width={90}
          src={"/default.png"}
          alt=""
        />
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2">UKCA High Power Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veritatis nihil nulla eos culpa soluta rerum, facere quo, suscipit hic nesciunt! Voluptate, aut? Quis voluptas recusandae asperiores? Repellendus molestiae earum quae dolorum facilis fugit. 24V Lifepo4 Pack 12V 400Ah Batterie 280Ah</p>
        <p className="font-bold text-xl">₹5,762.09-26,416.94</p>
        <p>
          MOQ: 2 pieces <span className="font-secondary">2 sold</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
