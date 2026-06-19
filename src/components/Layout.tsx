import Navbar from "./Navbar";

 type  TLayout ={
 
  children: React.ReactNode
 }
 
 
 function Layout({children}:TLayout) {
    return (
        <div>
            <Navbar/>

            {children}


        </div>
    )
}

export default Layout;
