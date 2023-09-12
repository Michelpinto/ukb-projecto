const size ={
    mobileXS:"320px",   //extra small
    mobileS:"375px",    //small
    mobileM:"390px",    //medium
    mobileL:"412px",    //large
    mobileXL:"428px",   //extra large
    mobileXXL:"514px",  //2*extra large
    tablet:"768px",     //normal
    laptopS: "914px",   //small
    laptopM:"1024",     //medium
    laptopL:"1440px",   //large
    desktop:"2560px"    //extra large
}


export const devices={
    mobileXS:`(min-width: ${size.mobileXS})`,
    mobileS:`(min-width: ${size.mobileS})`,
    mobileM:`(min-width: ${size.mobileM})`,
    mobileL:`(min-width: ${size.mobileL})`,
    mobileXL:`(min-width: ${size.mobileXL})`,
    mobileXXL:`(min-width: ${size.mobileXXL})`,
    tablet:`(min-width: ${size.tablet})`,
    laptopS:`(main-width: ${size.laptopS})`,
    laptopM:`(main-width: ${size.laptopM})`,
    laptopL:`(main-width: ${size.laptopL})`,
    desktop:`(main-width: ${size.desktop})`
}