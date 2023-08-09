import React from "react";
function Header(){
    return(
        <header>
                <nav>
        <img src="https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m190-wireless-mouse/m190-wireless-mouse-red-gallery-01.png?v=1" alt="" width={200} height={200}/>
                </nav>
            </header>
    )
}

function Footer(){
    return(
        <footer>
        <small>© 20xx development.</small> All rights reserved
        </footer>
    )
}
function Page(){
    return(
        <div>
            <Header />
        <h1>its working</h1>
        <ol >
            <li type="square">hi</li>
        </ol>
            <Footer />
        </div>
    );
}
export default Page