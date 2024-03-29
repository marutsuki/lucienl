import { FC, useRef } from "react";
import { useSelector } from "react-redux";
import { selectScrollContext } from "../navigation/scrollSlice";

const AboutMe: FC<object> = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContext = useSelector(selectScrollContext);

    if (scrollContext.context === "AboutMe") {
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return <section className="relative h-screen grid place-items-center text-xl grid-cols-2 grid-rows-1" ref={sectionRef}>
        <p className="text-left max-w-96 leading-loose mb-4">
            I'm a graduate from the University of Melbourne, passionate about technology and currently
            working as a full stack developer in Australia.
            <div className="h-4"/>
            In my own time, I'm a digitial artist and I like to sometimes experiment with music.
        </p>
        <img className="w-96" src="brs1.png"/>
    </section>
}

export default AboutMe;