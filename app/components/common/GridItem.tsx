import utils from "@utils/index";
import Image from "next/image";
import Link from "next/link";
import TextDescription from "./TextDescription";
import TextLabel from "./TextLabel";
import { TOrderProduct, TProduct } from "../../types/SushiCartTypes";
import { ASSETS_BASE_URI } from "@constants/index";
import { LabelsWrapper } from "../Wrappers";

type GridItemProps = {
  item: TProduct;
  handleSetProduct: (product: TProduct) => void;
  isModalShow: boolean;
  products?: TOrderProduct[];
};

export default function GridItem({
  item,
  handleSetProduct,
  isModalShow,
  products,
}: GridItemProps) {
  return (
    <div
      onClick={() => handleSetProduct(item)}
      className={`
        ${
          item.color
        } first:col-span-2 first:row-span-2 aspect-square relative ${
        products && products.length % 2 === 0
          ? "last:col-span-2 sm:last:col-span-1"
          : ""
      }
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
