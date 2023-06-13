import { useEffect, useMemo, useState } from "react";

const Profesions = () => {
    const textArray = useMemo(() => [
        "web developer", 
        "software engineer", 
        "react developer", 
        "frontend developer", 
        "backend developer"
    ], []);
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [text, setText] = useState("█");

    useEffect(() => {
        let timeoutId: number;

        if (text.length <= textArray[currentIndex].length) {
            timeoutId = (setTimeout(() => {
                setText(textArray[currentIndex].substring(0, text.length) + '█');
            }, 300)) as unknown as number;
        } else {
            timeoutId = (setTimeout(() => {
                setText("█");
                setCurrentIndex((currentIndex + 1) % textArray.length);
            }, 1000)) as unknown as number;
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [text, currentIndex, textArray]);

    return (<>{text}</>)
};

export default Profesions;