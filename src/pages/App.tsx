import Card from "../components/Card";
import Layout from "../components/Layout";

const dummyData = [
  {
    title: "Project 1",
    image: "/dummy.png",
  },
  {
    title: "Project 2",
    image: "/dummy.png",
  },
  {
    title: "Project 3",
    image: "/dummy.png",
  },
  {
    title: "Project 4",
    image: "/dummy.png",
  },
  {
    title: "Project 5",
    image: "/dummy.png",
  },
];

function App() {
  return (
    <Layout>
      <div className="grid grid-cols-5 gap-6">
        {dummyData.map((project, index) => (
          <Card key={index} title={project.title} image={project.image} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
