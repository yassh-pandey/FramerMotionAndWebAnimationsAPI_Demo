import React, {useRef, useEffect} from 'react'
import '../styles/Header.css'

function Header({setDisplayRoutes}) {
    useEffect(()=>{
        const pathLength = contentWrapperRef.childNodes[0].childNodes[0].getTotalLength();
        // contentWrapperRef.childNodes[0].animate([
        //     {opacity: 0},
        //     {opacity: 1}
        // ],{
        //     duration: 1000,
        //     ease:"easeIn"
        // });
        const animatePathLength = contentWrapperRef.childNodes[0].childNodes[0].animate([
            {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
            },
            {
                strokeDasharray: pathLength, 
                strokeDashoffset: 0
            }
        ],
        {
            duration: 2500,
            ease: "easeIn"
        });
        animatePathLength.finished.then(()=>{
      
        const spansArray = logoTitleRef.childNodes;
        let finalSpanElementAnimation = null;
        spansArray.forEach((spanElement, index)=>{
            finalSpanElementAnimation = spanElement.style.visibility = "visible";
                finalSpanElementAnimation = spanElement.animate([
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1
                    }
                ],{
                    duration: 150,
                    fill: "forwards",
                    ease: "easeInOut",
                    delay: index*150
                })
             });

             finalSpanElementAnimation.finished.then(()=>{
                const boundingClientRect = contentWrapperRef.getBoundingClientRect();
                const headerFinalAnimation = contentWrapperRef.animate([
                   {
                       transform: `translate3D(0px, 0px, 0px),`
                   },
                   {
                        transform: `translate3D(  0px ,  -${boundingClientRect.y}px , 0px)`
                   },
                   {
                        transform: `translate3D( -${boundingClientRect.x}px ,  -${boundingClientRect.y}px , 0px)`
                   }
               ],{
                   duration: 1500,
                   ease: "easeInOut"
               });

               headerFinalAnimation.finished.then(()=>{
                    headerContainerRef.style.justifyContent = "flex-start";

                    //contentWrapperRef.style.padding= "10px";
                    headerContainerRef.style.width = "100vw";
                    headerContainerRef.style.height = "100px";
                    const logoShrink = contentWrapperRef.animate([
                        {
                            transform: "scale(1, 1)",
                            transformOrigin: "center"
                        },
                        {
                            transform: "scale(0.8, 0.8)"
                        }
                    ], {
                        duration: 400,
                        fill: "forwards",
                        ease: "easeInOut"
                    });
                    logoShrink.finished.then(()=>{
                        setDisplayRoutes(true);
                    })
               })
             })
        });
    }, [])
    let contentWrapperRef = useRef().current;
    let logoTitleRef = useRef().current;
    let headerContainerRef = useRef().current;


    return (
        <div className="HeaderContainer"
        ref={ele=>headerContainerRef=ele}
        >
        <div
        ref={ele=>contentWrapperRef=ele}
        className="contentWrapper"
        >
            <svg  
                width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d="M 100 50  L 70 20 H 10 Z L 40 5 L 10 20 L 0 40 L 40 5 M 0 40 
                    L 100 50 L 40 80 L 0 40 L 70 90 L 100 50 L 90 80 L 70 90 M 90 80 
                    L 40 80" fill="transparent" stroke="white"/>
                </svg>
                <div className="logoTitle"
                ref={ele=>logoTitleRef=ele}
                >
                    <span>S</span>
                    <span>u</span>
                    <span>b</span>
                    <span>     </span>
                    <span>H</span>
                    <span>u</span>
                    <span>b</span>
                </div>
        </div>
        </div>
    )
}

export default Header
