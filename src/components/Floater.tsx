import styled from "styled-components";
import logo from "/Logo.svg";
import { useEffect, useRef } from "react";

const FloaterLayout = styled.div`
    position: fixed;
    top: 50%;
    left: 2vw;
    width: 100px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    z-index: 1;
    transform: translateY(-50%);
    transition: 500ms;
    text-transform: uppercase;
    user-select: none;

    * {
        width: fit-content;
    }
    
    a {
        display: inline-block;
        font-size: 2.5vh;
        text-decoration: none;
        letter-spacing: 2px;
        color: var(--important);
        :focus, :active {
            color: var(--important-action);
        }
    }
`;

const LogoLayout = styled.a`
    display: flex !important;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;

    user-select: none;
    text-decoration: none;
    color: var(--base-color);

    > img {
        width: 30%;
        aspect-ratio: 1/1;
    }
`;

const Floater = () => {
    const floaterRef = useRef(null);

    interface LogoLayour {
        link?: string,
        onClick: React.MouseEventHandler<HTMLAnchorElement>
    }
    
    const Logo = ({link, onClick}: LogoLayour) => {
        return (
            <LogoLayout href={link} onClick={onClick}>
                <img src={logo} />
            </LogoLayout>
        )
    };

    useEffect(() => {
        const toggleHiddenClass = (isAdd: boolean) => {
            if (floaterRef.current) {
                isAdd ?
                    (floaterRef.current as HTMLElement).classList.add("hidden")
                    : (floaterRef.current as HTMLElement).classList.remove("hidden");
            }
        };

        const handleScroll = () => {
            toggleHiddenClass(window.scrollY / window.innerHeight >= 0.85 ? false : true);
        };

        toggleHiddenClass(true);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
        if (link === window.location.pathname) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
    
    return (
        <FloaterLayout ref={floaterRef}>
            <Logo link={"/"} onClick={(e) => handleLinkClick(e, "/")} />
            
            <a 
                href={"/projects"} 
                className="text important" 
                onClick={(e) => handleLinkClick(e, "/projects")}
            >Projects</a>

            <a 
                href={"/contact"} 
                className="text important" 
                onClick={(e) => handleLinkClick(e, "/contact")}
            >Contact</a>
        </FloaterLayout>
    )
};

export default Floater;