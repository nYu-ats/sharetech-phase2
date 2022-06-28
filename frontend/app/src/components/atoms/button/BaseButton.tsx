import React from 'react';

export type BaseButtonProps = {
    label?: React.ReactNode;
    action?: "button" | "submit" | "reset" | undefined;
    backgroundColor?: string;
    color?: string;
    hoverBgColor?: string;
    width?:string;
    height?:string;
    onClick?:React.MouseEventHandler<HTMLElement>
}
