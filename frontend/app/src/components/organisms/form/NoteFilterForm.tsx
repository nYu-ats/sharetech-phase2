import { VFC } from 'react';
import { BaseFormProps } from './BaseForm';
import { SelectInput, OptionProps } from '../../atoms/input/SelectInput';
import { SimpleButton } from '../../atoms/button/SimpleButton';
import { SimpleLabel } from '../../atoms/label/SimpleLabel';

export type NoteFilterFormProps = BaseFormProps & {
}

export const NoteFilterForm:VFC<NoteFilterFormProps> = (props) => {
    return (
        <form style={{
            width:"100%"
        }}>
            <div style={{width:"100%", marginBottom:"2em"}}>
                <SimpleLabel label="ビジネス" color="#0095d9"/>
                <div style={{marginBottom:"1em"}}>
                    <SelectInput options={
                        [
                            {
                                label: "サンプル1",
                                value: "サンプル1"
                            },
                            {
                                label: "サンプル2",
                                value: "サンプル2"
                            },                {
                                label: "サンプル3",
                                value: "サンプル3"
                            }
                        ]
                    }/>
                </div>
                <div style={{marginBottom:"1em"}}>
                    <SelectInput options={
                        [
                            {
                                label: "サンプル1",
                                value: "サンプル1"
                            },
                            {
                                label: "サンプル2",
                                value: "サンプル2"
                            },                {
                                label: "サンプル3",
                                value: "サンプル3"
                            }
                        ]
                    }/>
                </div>
                <div style={{marginBottom:"1em"}}>
                    <SelectInput options={
                        [
                            {
                                label: "サンプル1",
                                value: "サンプル1"
                            },
                            {
                                label: "サンプル2",
                                value: "サンプル2"
                            },                {
                                label: "サンプル3",
                                value: "サンプル3"
                            }
                        ]
                    }/>
                </div>
            </div>
            <div  style={{width:"100%", display:"inline-block"}}>
                <SimpleLabel label="技術" color="#0095d9"/>
                <div style={{marginBottom:"1em"}}>
                    <SelectInput options={
                        [
                            {
                                label: "サンプル1",
                                value: "サンプル1"
                            },
                            {
                                label: "サンプル2",
                                value: "サンプル2"
                            },                {
                                label: "サンプル3",
                                value: "サンプル3"
                            }
                        ]
                    }/>
                </div>
                <div style={{marginBottom:"1em"}}>
                    <SelectInput options={
                        [
                            {
                                label: "サンプル1",
                                value: "サンプル1"
                            },
                            {
                                label: "サンプル2",
                                value: "サンプル2"
                            },                {
                                label: "サンプル3",
                                value: "サンプル3"
                            }
                        ]
                    }/>
                </div>
            </div>
            <div  style={{width:"4em", height:"24px", margin:"auto"}}>
                <SimpleButton 
                label='検索' 
                action='submit' 
                backgroundColor='#0095d9' 
                hoverBgColor='#00a1e9' 
                height='2.5em'
                width="5em"/>
            </div>
        </form>
    );
}