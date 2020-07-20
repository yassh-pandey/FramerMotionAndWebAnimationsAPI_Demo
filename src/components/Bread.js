import React, {useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from "framer-motion"
import "../styles/Bread.css"
function Bread({bread, setBread}) {
    const breadRefs = useRef([]).current;
    useEffect(()=>{
        setBread("");
    }, [])
    const breads = [
        {
            name: "Multigrain Bread",
            id: "MultigrainBread"
        },
        {
            name: "Multigrain Honey Oats Bread",
            id: "MultigrainHoneyOatsBread"
        },
        {
            name: "Italian Bread",
            id: "ItalianBread"
        },
        {
            name: " Roasted Garlic Bread",
            id: " RoastedGarlicBread"
        },
        {
            name: "Parmesan Oregano Bread",
            id: "ParmesanOreganoBread"
        },
        {
            name: "Flat Bread",
            id: "Flat Bread"
        }
    ];
    const [selectedList, setSelectedList] = useState(Array(breads.length).fill(false));
    const breadContainerVariant = {
        final: {
            transition: {
                staggerChildren: 0.1
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        }
    }
    const breadChildVariants = {
        initial: {
            opacity: 0,
            x: 200
        },
        final: {
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            x: -200,
            transition: {
                ease: "easeInOut",
                duration: 0.3
            }
        }
    }

    const liElementVariants = {
        hover: {
            color: "rgb(225, 173, 1)",
            scale: 1.1,
            transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.3
            }
        }
    }

    const titleVariants = {
        initial: {
            opacity: 0,
            originX: "left"
        },
        final: {
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 1
            }
        }
    }
    const nextBtnVariants = {
        initial: {
            opacity: 0,
            x: "-400px"
        },
        final:{
            opacity: 1,
            x: "0px"
        }, 
        hover: {
            scale: 1.2,
            boxShadow: "0px 0px 4px white",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            y: 200
        }
    }

    const breadClicked = (e)=>{
        e.preventDefault();
        const selectedBread = breads.find(bread=>bread.id===e.currentTarget.id).name;
        const indexOfBreadSelected = breads.findIndex(bread=>bread.id===e.currentTarget.id);
        const newSelectedList = Array(breads.length).fill(false);
        newSelectedList[indexOfBreadSelected] = true;
        Array.from(breadRefs).forEach(breadRef=>{
            breadRef.childNodes[0].childNodes[0].classList.remove("selected");
            breadRef.childNodes[1].classList.remove("animateListItemOnSelect");
        });
        breadRefs[indexOfBreadSelected].childNodes[0].childNodes[0].classList.add("selected");
        breadRefs[indexOfBreadSelected].childNodes[1].classList.add("animateListItemOnSelect");
        setSelectedList(newSelectedList);
        setBread(selectedBread);
    }
    return (
        <motion.div
        variants={breadContainerVariant}
        initial="initial"
        animate="final"
        exit="exit"
        className="BreadContainer">
            <motion.h2
            className="title"
            variants={titleVariants}
            >
                Select the base of your <span style={{color: "#bb11ff"}}>Sub</span>: 
            </motion.h2>
            <ul>
                {
                    breads.map((bread, index)=>(
                        <motion.div 
                        variants={breadChildVariants}
                        whileHover="hover"
                        ref={element=>breadRefs[index]=element} 
                        className="listItem" id={bread.id} key={bread.id} 
                        onClick={breadClicked}>
                            <span className="radioBtn">
                                <span></span>
                            </span>
                            <motion.li
                            variants={liElementVariants}
                            custom={index}
                            >
                                {bread.name}
                            </motion.li>
                        </motion.div>
                    ))
                }
            </ul>
            {
                bread===""
                ?
                null
                :
                <Link to="/sauces" className="GetStarted">
                    <motion.button className="nextBtn" 
                    variants={nextBtnVariants}
                    whileHover="hover"
                    >
                        Next
                    </motion.button>
                </Link>
            }
        </motion.div>
    )
}

export default Bread
