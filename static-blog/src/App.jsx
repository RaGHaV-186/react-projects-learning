import BlogCard from "./BlogCard";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App(){
  const blogs = [
  { title: "React Basics", author: "Raghav", content: "Intro to React" },
  { title: "Hooks Guide", author: "John", content: "Using hooks" }
];
  return(
    <div>
      <div>
        <NavBar />
      </div>
      <div>
      <BlogCard title={"ml learning"} content={"Intro to props"} author={"CR7"}/>
      {blogs.map((blog,index)=>(
        <BlogCard title={blog.title} content={blog.content} author={blog.author}/>
      ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default App