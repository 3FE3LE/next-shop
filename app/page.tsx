import GridItem from "@components/GridItem";
import Navbar from "@components/Navbar";

export default function Home() {
  const data = [
    { name: "<NAME>", color: "bg-rose-500", description: "Lorem" },
    { name: "<NAME>", color: "bg-black", description: "Lorem" },
    { name: "<NAME>", color: "bg-sky-500", description: "Lorem" },
    { name: "<NAME>", color: "bg-white", description: "Lorem" },
    { name: "<NAME>", color: "bg-slate-300", description: "Lorem" },
    { name: "<NAME>", color: "bg-indigo-500", description: "Lorem" },
  ];

  return (
    <main className="">
      
      <section>
        <Navbar/>
        <div className="grid grid-flow-row grid-cols-3">
          {data.map(item => (
            <GridItem key={item.color} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
