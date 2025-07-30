import { Camera, Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const SearchNavbar = () => {
  return (
    <div className="py-4">
        <div className="label mb-2 flex items-center gap-8 justify-center py-2">
            <h2 className="text-3xl underline-offset-4 underline  font-bold">Products</h2>
            <h2 className="text-3xl   font-medium">Manufactures</h2>
            <h2 className="text-3xl   font-medium">Regional Supplies</h2>
        </div>
      <div className="flex mx-auto max-w-screen-md gap-2 items-center">
         <div className="bg-background w-full rounded-3xl p-1 flex items-center gap-1 ">
         <Input className="border-none shadow-none text-foreground  ring-0 focus-within:ring-0 outline-none focus:ring-0 " placeholder="smart card " />
        <Button size={'lg'} className="rounded-3xl p-4" variant={'secondary'}><Search/> Search</Button>
        
       </div>
       <Button size={'lg'} className="rounded-3xl p-6" variant={'destructive'}><Camera className="text-primary"/> Image Search</Button>
      </div>
        
    </div>
  )
}

export default SearchNavbar