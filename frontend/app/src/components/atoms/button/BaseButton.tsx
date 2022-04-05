import React from 'react';

export type BaseButtonProps = {
    value: string;
    action?: "button" | "submit" | "reset" | undefined;
    backgroundColor?: string;
    color?: string;
    fontWeight?: string;
    hoveredBgColor?: string;
    width?:string;
    height?:string;
    onClick?:React.MouseEventHandler<HTMLElement>
}
