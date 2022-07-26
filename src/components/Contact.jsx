
import { Grid,Container,useTheme,useMediaQuery} from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import '../styles/Contact.css'
import git from '../images/git.svg'
import linkedin from '../images/linkedin.svg'
import gmail from '../images/gmail.svg'
import phone from '../images/phone.svg'





export const Contact=()=>{

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
            <div id="Contact">
                <Grid sx={{ pt:padding
            }} container  >
                <Container className="contact-container" maxWidth="3000px" sx={{height:"320px"}}>
                    <h6>GET IN TOUCH</h6>
                    <h3>CONTACT ME</h3>
                    <div className="icon_container">
                        <a href="https://www.linkedin.com/in/kiran-das-324b8a1b6/" target="_blank" rel="noreferrer noopener" >
                            <div> 
                                <img src={linkedin} alt="Contact Icons" /> 
                                </div>
                        </a>
                        <a href="https://github.com/Kirandas96" target="_blank" rel="noreferrer noopener">
                            <div> 
                                <img src={git} alt="Contact Icons" />
                             </div>
                             
                        </a>
                        <a href="mailto:parvathikiran10@gmail.com" target="_blank" rel="noreferrer noopener" >
                            <div>
                                <img src={gmail} alt="Contact Icons" /> 
                            </div>
                        </a>
                        <a href="tel:+918089663158" target="_blank" rel="noreferrer noopener">
                            <div>
                                 <img src={phone} alt="Contact Icons" />
                                  </div>
                        </a>
                    </div>

                </Container>
                
            </Grid>
            </div>
    )
}