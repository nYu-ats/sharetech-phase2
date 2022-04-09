import React from 'react';

export type BaseButtonProps = {
    label: string;
    action?: "button" | "submit" | "reset" | undefined;
    backgroundColor?: string;
    color?: string;
    fontWeight?: string;
    hoverBgColor?: string;
    width?:string;
    height?:string;
    onClick?:React.MouseEventHandler<HTMLElement>
}
