import { ReactNode, VFC } from 'react';
import styled from 'styled-components';
import { BaseTableRowProps } from './BaseTableRow';

export type TableHeadProps = BaseTableRowProps & {}

export const TableHead: VFC<TableHeadProps> = (props) => {
    return (
        <tr>
            {props.data.map((item)=>{
                return (
                <th style={{
                    width:"10em", 
                    height:"1em",
                    wordBreak:"break-all",
                    overflowWrap:"normal",
                    whiteSpace:"normal",
                    color:"#666",
                    backgroundColor:"#87cefa"}}>
                    {item}
                </th>);
            })}
        </tr>
    )    
}