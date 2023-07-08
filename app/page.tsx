import GridItem from "@components/GridItem";

export default function Home() {
  const data = [
    { name: "<NAME>", color: "bg-black", description: "Lorem" },
    { name: "<NAME>", color: "bg-white", description: "Lorem" },
    { name: "<NAME>", color: "bg-slate-300", description: "Lorem" },
    { name: "<NAME>", color: "bg-sky-500", description: "Lorem" },
    { name: "<NAME>", color: "bg-indigo-500", description: "Lorem" },
    { name: "<NAME>", color: "bg-rose-500", description: "Lorem" },
  ];

  return (
    <main className="">
      <nav className="flex justify-between p-4 h-12">
        <h1>Sushi Cart</h1>
        <div>
          <span>cart</span>
        </div>
      </nav>
      <section>
        <div className="grid grid-flow-row grid-cols-3">
          {data.map(item => (
            <GridItem key={item.color} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
