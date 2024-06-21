import { useEffect, useRef } from "react";
import gsap from "gsap"
export default function Cursor ({isActive}) {
    const mouse = useRef({x: 0, y: 0});
    const circle = useRef();
    const size = isActive ? 75: 25;
    let value: Number = 10;
    const delayedMouse = useRef({x: 0, y: 0});
    const rafId = useRef(null);
    const lerp = (x, y, a):Number => x * (1 - a) + y * a;
    value = lerp(value, 0, 0.1);
    
    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
    
        mouse.current = {
            x: clientX,
            y: clientY
        }

        moveCircle(mouse.current.x, mouse.current.y);
    };
    const animate = () => {
        const {x, y } = delayedMouse.current;
        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        }
        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        rafId.current = window.requestAnimationFrame(animate);
    }

    const moveCircle = (x, y) => {
        gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50})
    };

    useEffect( () => {
        animate()
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafId.current)
        }
    }, [])

    return (
            <div 
                ref={circle}
                style={{
                    // filter: `blur(${isActive ? 6 : 2}px)`,
                    transition: `height 0.5s ease-in-out, width 0.5s ease-in-out, opacity 0.5s ease-out`,
                    width: size,
                    height: size,
                    opacity: isActive?0.1:0.4
                }}
                className='top-0 left-0 absolute rounded-full bg-primary opacity-10 z-10' 
            />
    )
}