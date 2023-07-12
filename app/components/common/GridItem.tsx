import utils from "@utils/index";
import Image from "next/image";
import Link from "next/link";
import TextDescription from "./TextDescription";
import TextLabel from "./TextLabel";
import { TProduct } from "../../types/SushiCartTypes";
import { ASSETS_BASE_URI } from "@constants/index";
import { LabelsWrapper } from "../Wrappers";

type GridItemProps = {
  item: TProduct;
  handleSetProduct: (product: TProduct) => void;
  isModalShow: boolean;
  isLastItem: boolean;
  isProductDetail?: boolean;
};

export default function GridItem({
  item,
  handleSetProduct,
  isModalShow,
  isLastItem,
  isProductDetail,
}: GridItemProps) {
  return (
    <div
      onClick={() => handleSetProduct(item)}
      className={`relative ${item.color} 
          ${isLastItem ? "col-span-2 " : "col-auto"}
          ${isProductDetail ? "first:col-span-2 first:row-span-2 " : ""}
        `}
    >
      <Link
        prefetch
        className="relative aspect-square flex"
        href={"/product-detail"}
      >
        <Image
          src={ASSETS_BASE_URI + item.img}
          alt={item.description.en}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <LabelsWrapper>
        <TextLabel isModal={isModalShow} text={item.name.en} />
        <TextLabel
          isModal={isModalShow}
          text={utils.formatPrice(item.price)}
          italic
        />
      </LabelsWrapper>
      <TextDescription isModal={isModalShow} text={item.description.en} />
    </div>
  );
}
