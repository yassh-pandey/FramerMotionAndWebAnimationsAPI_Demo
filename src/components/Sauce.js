import React from 'react'
import {motion} from "framer-motion"
import '../styles/Sauce.css'
import redChilli from "../assets/chilli.svg"
function Sauce() {
    const sauces = [
        {
            name: "Mayonnaise",
            id: "Mayonnaise"
        },
        {
            name: "Mint Mayonnaise",
            id: "MintMayonnaise"
        },
        {
            name: "Chipotle South West",
            id: "ChipotleSouthWest"
        },
        {
            name: "Honey Mustard",
            id: "HoneyMustard"
        },
        {
            name: "Red Chilli",
            id: "RedChilli"
        },
        {
            name: "Marinara",
            id: "Marinara"
        },
        {
            name: "Barbeque",
            id: "Barbeque"
        },
        {
            name: "Tandoori Mayo",
            id: "TandooriMayo"
        },
        {
            name: "Sweet Onion",
            id: "SweetOnion"
        }
    ]
    const sauceContainerVariants = {
        initial: {
            opacity: 0
        },
        final: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.5,
                duration: 2
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.5
            }
        }
    }
    return (
        <motion.div
        variants={sauceContainerVariants}
        className="sauceContainer"
        >
            <img alt={"red chilli"} src={redChilli} style={{width: "120px", height: "100%", background: "white", borderRadius: "50%"}}/>
             <div className="sauceTitle">
                        Choice of <span style={{fontStyle: "italic"}}>sauce</span>(any 3):
            </div>
            {
                sauces.map(sauce=>(
                        <div className="sauceItem" key={sauce.id} id={sauce.id}>
                            {sauce.name}
                        </div>
                ))
            }
        </motion.div>
    )
}

export default Sauce
