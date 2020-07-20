import React from 'react'
import "../styles/Home.css"
import {Link} from 'react-router-dom'
import {motion} from "framer-motion";
function Home() {
    const homeContainerVariant = {
        initial: {
            opacity: 0
        },
        final: {
            opacity: 1,
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
    const pTagChildVariant = {
        initial: {
            opacity: 0,
            x: "100vw"
        },
        final: {
            opacity: 1,
            x: 0,
            transition: {
                    type: "spring",
                    mass: 1.05,
                    damping: 12,
                    stifness: 100
            }
        },
        exit: {
            opacity: 0,
            x: "-100vw",
            transition: {
                ease: "easeInOut",
                duration: 0.6
            }
        }
    }
    const wrapperChildVariant = {
        initial: {
            y: 600,
            opacity: 0,
        },
        final: {
            y: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.2,
                ease: "easeInOut"
            }
        },
        exit: {
            y: 600,
            opacity: 0,
            pointerEvents: "none",
            transition: {
                ease: "easeInOut",
                duration: 0.6
            }
        }
    }
    const buttonVariantOnHover = {
        initial: {
            color: "white",
            border: "transparent"
        },
        hover: {
            scale: 1.3,
            boxShadow: "0px 0px 10px white",
            color: "white",
            border: "transparent",
            transition: {
                duration: 0.2
            }
        }
    }
    return (
        <motion.div className="HomeContainer"
            variants={homeContainerVariant}
            initial="initial"
            animate="final"
            exit="exit"
        >
            <motion.p className="Tagline"
                variants={pTagChildVariant}
            >
                Welcome to subHub <span role="img" aria-label="burger emoji">🍔</span>, where you make your own custom Sub from a variety of breads and toppings to choose from.
            </motion.p>
            <Link to="/breads" className="GetStarted">
            <motion.div
                variants={wrapperChildVariant}
            >
                <motion.button
                    variants={buttonVariantOnHover}
                    whileHover="hover"
                >
                    Get Started
                </motion.button>
            </motion.div>
            </Link>
        </motion.div>
    )
}

export default Home
