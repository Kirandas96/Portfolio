
import { Grid,useTheme,useMediaQuery} from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useEffect } from "react"
import '../styles/Work.css'
import bebody from '../images/bebody.png'
import myntra from '../images/myntra.png'
import fraazo from '../images/fraazo.png'
export const Work=()=>{

    const[padding,setpadding]=useState("")
    
    const theme=useTheme()
    const small=useMediaQuery(theme.breakpoints.down("sm"))
    const medium=useMediaQuery(theme.breakpoints.only("sm"))
    const large=useMediaQuery(theme.breakpoints.up("md"))
    useEffect(()=>{
        if(small)
        setpadding("30px")
        else if(medium)
        setpadding("50px")
        else if(large)
        setpadding("60px")
    },[small,medium,large])


    return(
            <div id="Works">
                <Grid sx={{ py:padding
            }} container  >
                    <h1 className="works-heading">PROJECTS</h1>
                    <Grid container sx={{px:"10px"}}>



                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{pt:"10px"}} > 
                       <Box className="work-container" maxWidth="600px" >
                           <div className="work-inner-container">
                           <h3 className="p-name">FRAAZO</h3>
                               <div className="p-image">
                                   <img src={fraazo} alt="" />
                               </div>
                               
                               <p className="p-description">This time as a part of Curriculum’s module 4 project .we were given a task to develop clone of a website named Fraazo (www.Fraazo.com).Fraazo was launched in 2016 as a fresh produce store in the posh locality of Powai with a clear vision of serving the customers with farm-fresh groceries delivered at the doorstep.</p>
                               <p className="p-stack"> Javascript | HTML | CSS | React | Redux Thunk</p>
                               <div className="p-buttons">   
                                   <a href="https://extraordinary-blancmange-42c3dc.netlify.app/" target="_blank" rel="noreferrer noopener">
                                   <button>LIVE</button>
                                   </a>
                                   <a href="https://github.com/Kirandas96/Fraazo" target="_blank" rel="noreferrer noopener">
                                   <button>CODE</button>
                                   </a>
                                   <a href="https://medium.com/@amankatiyar0002016/fraazo-d0e53e1d1aaa" target="_blank" rel="noreferrer noopener">
                                   <button>DETAILS</button>
                                   </a>
                               </div>
                              
                           </div>
                       </Box>
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{p:"10px"}} > 
                       <Box className="work-container" maxWidth="600px" >
                           <div className="work-inner-container">
                           <h3 className="p-name"> BEBODYWISE</h3>
                               <div className="p-image">
                                   <img src={bebody} alt="" />
                               </div>
                               
                               <p className="p-description">
                               We worked on cloning a BODYWISE website. This website is mainly for women, where they provide women health-related products and services. in this project, we used HTML, CSS, JAVASCRIPT which we have merged by using GITHUB. Our project is dynamic and responsive in work.
                               </p>
                               <p className="p-stack"> Javascript | HTML | CSS</p>
                               <div className="p-buttons">
                                   <a href="https://gallant-jackson-573754.netlify.app/index.html" target="_blank" rel="noreferrer noopener">
                                   <button>LIVE</button>
                                   </a>
                                   <a href="https://github.com/Kirandas96/BeBodyWise" target="_blank" rel="noreferrer noopener">
                                   <button>CODE</button>
                                   </a>
                                   <a href="https://medium.com/@narayanchatalwar/be-bodywise-website-clone-49ef1ab65156" target="_blank" rel="noreferrer noopener">
                                   <button>DETAILS</button>
                                   </a>
                               </div>
                              
                           </div>
                       </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{pt:"10px"}} > 
                       <Box className="work-container" maxWidth="600px" >
                           <div className="work-inner-container">
                           <h3 className="p-name">MYNTRA CLONE</h3>
                               <div className="p-image">
                                   <img src={myntra} alt="" />
                               </div>
                               
                               <p className="p-description">Our project is typical e-commerce website clone. The flow of our website starts from a landing page then to a product page that leads to a description page and wishlist page which takes to cart and payment page</p>
                               <p className="p-stack"> Javascript | HTML | CSS</p>
                               <div className="p-buttons">   
                               <a href="https://cranky-knuth-b30b90.netlify.app/" target="_blank" rel="noreferrer noopener">
                                   <button>LIVE</button>
                                   </a>
                                   <a href="https://github.com/Kirandas96/Myntra-Clone" target="_blank" rel="noreferrer noopener">
                                   <button>CODE</button>
                                   </a>
                                   <a href="https://medium.com/@swainrakeshkumar60/myntra-online-fashion-store-97352e428d6b" target="_blank" rel="noreferrer noopener">
                                   <button>DETAILS</button>
                                   </a>
                               </div>
                              
                           </div>
                       </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{pt:"10px"}} > 
                       <Box className="work-container" maxWidth="600px" >
                           <div className="work-inner-container">
                           <h3 className="p-name">WEATHER APP</h3>
                               <div className="p-image">
                                   <img src="https://user-images.githubusercontent.com/91669835/166094013-ffd663e8-714f-477f-acb0-0f8912e12b3c.png" alt="" />
                               </div>
                               
                               <p className="p-description"> Web Application to get details about the weather of a place ,Can find the weather of a place by searching , Built using public weather api</p>
                               <p className="p-stack"> Javascript | HTML | CSS</p>
                               <div className="p-buttons">   
                               <a href="https://extraordinary-concha-1bdc0a.netlify.app/" target="_blank" rel="noreferrer noopener">
                                   <button>LIVE</button>
                                   </a>
                                   <a href="view-source:https://extraordinary-concha-1bdc0a.netlify.app/" target="_blank" rel="noreferrer noopener">
                                   <button>CODE</button>
                                   </a>
                               </div>
                              
                           </div>
                       </Box>
                    </Grid>
                    


                    </Grid>
            </Grid>
            </div>
    )
}



