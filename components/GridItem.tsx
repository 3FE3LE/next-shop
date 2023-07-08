type GridItemProps = {
  item: {
    name: string;
    color: string;
    description: string;
  };
};

export default function GridItem({ item }: GridItemProps) {
  return <div className={item.color + " first:col-span-2 first:row-span-2 aspect-square"}>{item.name}</div>;
}
