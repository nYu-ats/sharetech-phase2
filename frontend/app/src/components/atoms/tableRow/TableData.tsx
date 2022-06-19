import { ReactNode, VFC } from 'react';
import styled from 'styled-components';
import { BaseTableRowProps } from './BaseTableRow';

export type TableDataProps = BaseTableRowProps & {
    rowIndex?:number;
}

export const TableData: VFC<TableDataProps> = (props) => {
    return (
        <tr>
            {props.data.map((item)=>{
                return (
                <td style={{
                    width:"10em", 
                    height:"1em",
                    wordBreak:"break-all",
                    overflowWrap:"normal",
                    whiteSpace:"normal",
                    color:"#666",
                    backgroundColor:"white"}}
                    data-rowIndex={props.rowIndex}>
                    {item}
                </td>);
            })}
        </tr>
    )    
}