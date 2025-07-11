import HomePage from "../../components/HomePage/HomePage";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import "./Home.css"
function Home({sideNavbar, search}){
  return(
    <>
    <div className="home">
      <SideNavbar sideNavbar={sideNavbar}/>
      <HomePage search={search}  sideNavbar={sideNavbar}/>
    </div>
    </>
  )
}
export default Home;