import FilterNavbar from "@/components/layout/FilterNavbar"
import Navbar from "@/components/layout/Navbar"
import SearchNavbar from "@/components/layout/SearchNavbar"

const HomeLayout = ({children}) => {
  return (
    <div>
         <header className="px-8  py-2 bg-primary text-primary-foreground">
         <div className="max-w-screen-2xl mx-auto">
           <Navbar />
          <div className="pt-16">
            <FilterNavbar />
          <SearchNavbar/>
          </div>
         </div>
        </header>
       <main className="max-w-screen-2xl mx-auto">
         {children}
       </main>
    </div>
  )
}

export default HomeLayout