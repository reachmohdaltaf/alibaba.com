'use client'
import { Globe, Inbox, MessageSquare, Notebook, Search, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`fixed px-8 max-w-screen-3xl mx-auto top-0 left-0 right-0 flex justify-between items-center h-16 transition-all duration-300 z-50 ${scrolled ? "bg-white shadow-md h-18" : "bg-primary"}`}>
      <div className="logo flex items-center">
        {scrolled ? (
            <Image height={190} width={180} src="/logo1.png" alt="" />
        ):(
                      <Image height={190} width={180} src="/logo2.png" alt="" />
  
        )}
      </div>

     {scrolled && <div className="searchb flex bg-background border-1 border-black/20 rounded-2xl rounded-e-2xl items-center max-w-xl w-xl">
        <Input className=" shadow-none border-none rounded-2xl placeholder:text-foreground text-foreground " placeholder="search here" />
        <Button size={'sm'} className="rounded-2xl"><Search/>Search</Button>
      </div>}

      <div className={`labels ${scrolled? "text-foreground": "text-primary-foreground"} flex items-center justify-between`}>
        <ul className="flex items-center  gap-5">
          {/* <Link href={'/'} className="text-xs flex flex-col ">
            Deliver to: 
            <span className="font-bold text-lg flex ">
              IN
            </span>
          </Link> */}
          <Link href={'/'}><Globe size={22} /></Link>
          <Link href={'/'}><Inbox  size={22}/></Link>
          <Link href={'/'}><MessageSquare  size={22}/></Link>
          <Link href={'/'}><Notebook  size={22}/></Link>
          <Link href={'/'}><ShoppingCart  size={22}/></Link>
          <Link href={'/login'} className="flex hover:underline"><User  size={22}/>Sign in</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
