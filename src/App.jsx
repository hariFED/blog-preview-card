import BlogCard from "./component/blog-card";
const data = [
  {
    cateagory: "Learning",

    date: "21 Dec 2023",
    title: "HTML & CSS foundations",
    description: "These languages are the backbone of every website, defining structure, content and presentation.",
    publishername: "Greg Hopper",


  }
]

function App() {

  return (
    <>
      <div className="font-figtree bg-[#f4d04e] h-screen flex flex-col items-center justify-center">
        {data.map((item) => {
          return (
            <BlogCard key={1} cateagory={item.cateagory}
              date={item.date}
              title={item.title}
              description={item.description}
              publishername={item.publishername}

            />
          )
        })}
      </div>

    </>
  )
}

export default App;
