"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
 
 function Navbar() {

    const pathname = usePathname()


    const newlink = [

        {
            href:"/",
            title:"Home"

        },
        {
             href:"/Store",
            title:"Store"

        }
    ]
    return(

        <nav className="shadow p-4">
            <Container>

             {newlink.map((item) => (
                    
                     <Link className={`mr-4  ${pathname === item.href ? "text-sky-500" : "" }`} href={item.href} key={item.href}>
                        {item.title}
                        </Link>

                ))}
            </Container>

  




        </nav>

            
           
            

        
    )
        
 
}

    export default Navbar;
