import { FC, useState } from "react";

type IndexProps = {
    funcs: { id: string, label: string, func: () => void }[];
    itemClassName: string;
    activeItemClassName?: string;
    onClick?: (label: string) => void;
    active?: string;
}
const Index: FC<IndexProps> = ({ funcs, itemClassName = "", activeItemClassName = "", onClick, active }: IndexProps) => {
    const onClickWrapper = (label: string, func: () => void) => {
        if (onClick) onClick(label);
        func();
    }
    return <ul className="m-8 flex-col text-left leading-9">
        {
            funcs.map(({ id, label, func }) => <li key={`backend-tool-${label}`} 
                className={`${itemClassName} ${active === id ? activeItemClassName : ""}`}
                onClick={() => onClickWrapper(label, func)}>{ label }
            </li>)
        }
    </ul>
}

export default Index;