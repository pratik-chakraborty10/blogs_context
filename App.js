import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"


export const  App=()=>{
  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();

  },[]);
  return (
    <div className="w-ful h-full flex flex-col gap-y-1 justify-center items-center ">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>

  )
 
}
export default App