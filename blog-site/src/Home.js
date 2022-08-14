import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, error, isPending} = useFetch("http://localhost:8000/blogs");   

    return ( 
        <div className="home">
            {error && <div className="erorr-div">{error}</div>}
            {isPending && <div className = "loading"><p>Loading...</p></div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;