import React, { VFC } from 'react';
import { BaseTable } from './BaseTable';
import { TableHead } from '../../atoms/tableRow/TableHead';
import { TableData } from '../../atoms/tableRow/TableData';
import { TextAreaInput } from '../../atoms/input/TextArea';

export type SimpleTableProps = BaseTable & {
    readonly?: boolean;
    onHeadUpdate?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onDataUpdate?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const SimpleTable: VFC<SimpleTableProps> = (props) => {
    return (
        <table>
            {props.head ? (
                <TableHead data={
                    props.head.map((item, index) => {
                        return (
                            props.readonly ? (
                                <div style={{ minHeight: '32px', backgroundColor: '#87cefa' }}>
                                    {item}
                                </div>
                            ) : (
                                <TextAreaInput
                                    placeHolder=''
                                    data-index={index}
                                    border='none'
                                    minHeight='32px'
                                    maxLength={32}
                                    backgroundColor='#87cefa'
                                    onChange={props.onHeadUpdate}
                                    defaultValue={item as string} />
                            )
                        );
                    })} />) : null}
            {props.data.map((item, colIndex) => {
                return <TableData
                    rowIndex={colIndex}
                    data={item.map((item, index) => {
                        return (
                            props.readonly ? (
                                <div style={{ minHeight: '32px' }}>
                                    {item}
                                </div>
                            ) : (
                                <TextAreaInput
                                    placeHolder=''
                                    data-index={index}
                                    border='none'
                                    minHeight='32px'
                                    maxLength={32}
                                    onChange={props.onDataUpdate}
                                    defaultValue={item as string} />
                            )
                        )
                    })} />
            })}
        </table>
    );
}