import styled from "styled-components";
import logo from "/Logo.svg";
import { useEffect, useRef } from "react";

const HeaderLayout = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 60px;

    z-index: 11;
    background-color: var(--background);
    filter: drop-shadow(0px 4px 4px var(--shadow));
    font-size: 28px;
    overflow: hidden;
    transition: 300ms;
`;

const Collapse = styled.nav`
    height: 100%;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LogoLayout = styled.a`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3px;

    user-select: none;
    text-decoration: none;
    color: var(--base-color);

    > img {
        height: 60%;
        aspect-ratio: 1/1;
        transform: translate(10px, -5px);
    }

    > span {
        display: block;
        height: fit-content;

        @media (max-width: 768px) {
            display: none;
        }
    }
`;

const LinkMenuLayout = styled.li`
    display: inline-flex;
    flex-direction: row;
    margin: 0 2em;
`;

const LinkLayout = styled.ul`
    position: relative;
    width: 6em;
    height: 100%;
    margin: 0px;
    padding: 0px;
`;

const Link = styled.a`
    position: absolute;
    width: fit-content;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: var(--base-color);
    user-select: none;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 3vh;
    letter-spacing: 3px;

    :hover {
        color: var(--important);
    }
    :focus, :active {
        color: var(--important-action);
    }
`;

const Header = () => {
    const headerRef = useRef(null);
    const isHeaderVisible = useRef(true);
    
    const Logo = ({link, text}: { link?: string, text?: string }) => {
        return (
            <LogoLayout href={link}>
                <img src={logo} />
                <span>{text}</span>
            </LogoLayout>
        )
    };

    useEffect(() => {
        const handleScroll = () => {
            isHeaderVisible.current = window.pageYOffset >= 60 ? false : true;
            if (headerRef.current) {
                isHeaderVisible.current ?
                    (headerRef.current as HTMLElement).classList.remove("hidden")
                    : (headerRef.current as HTMLElement).classList.add("hidden");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <HeaderLayout ref={headerRef}>
            <Collapse>
                <Logo link={"/"} text="ortfolio" />
                <LinkMenuLayout>
                    <LinkLayout><Link href={"/projects"}>Projects</Link></LinkLayout>
                    <LinkLayout><Link href={"/contact"}>Contact</Link></LinkLayout>
                </LinkMenuLayout>
            </Collapse>
        </HeaderLayout>
    )
};

export default Header;