import { Globe, Inbox, MessageSquare, Notebook, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="bg-primary  flex justify-between  items-center h-14 ">
        <div className="logo flex   items-center">
            <Image height={180} width={180} src="/logo2.png" alt="" />
        </div>

        <div className="labels  text-primary-foreground flex items-center justify-between ">
            <ul className="flex items-center gap-5">
                <Link href={'/'} className="text-xs">Deliver to: <br /> <span className="font-bold test-sm flex gap-1"><Image height={20} width={20} src="/flag.png" alt="" />IN</span></Link>
                <Link href={'/'}><Globe/></Link>
                <Link href={'/'}><Inbox/></Link>
                <Link href={'/'}><MessageSquare/></Link>
                <Link href={'/'}><Notebook/></Link>
                <Link href={'/'}><ShoppingCart/></Link>
                <Link href={'/'}><User/></Link>
            </ul>
        </div>

    </div>
  )
}

export default Navbar