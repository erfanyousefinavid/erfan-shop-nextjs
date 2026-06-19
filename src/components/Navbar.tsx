import Link from "next/link";
 
 function Navbar() {
    return(

        <div>

            <ul>
                <Link href="/"><li>Home</li></Link>
                <Link href="/Store"><li>store</li></Link>
            </ul>

        </div>
    )
        
 
}

    export default Navbar;
