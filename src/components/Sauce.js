import React from 'react'
import {motion} from "framer-motion"
import '../styles/Sauce.css'
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
        },
        final: {
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.5
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
        >

        </motion.div>
    )
}

export default Sauce
