import { VFC } from 'react';
import { IconNumbering } from '../../../icons/IconNumbering';

export type TechNoteMetaProps = {
    expose: boolean;
    icon: number;
    title: string;
    tags: Array<string>;
}

export const TechNoteMeta:VFC<TechNoteMetaProps> = (props) => {

    return (
        <div>
            <div style={{
                borderRadius:'4px',
                padding: '0 .5rem 1rem 0',
                width: 'auto',
                color: '#666',
                fontWeight: 'lighter'
            }}>
                {props.expose ? '公開' : '非公開'}
            </div>
            <div style={{marginBottom:"1em", display:'flex', justifyContent:'left'}}>
                <div style={{paddingRight:'1rem'}}>
                    {IconNumbering[Number(props.icon)]}
                </div>
                <div style={{fontSize:'1.5rem', fontWeight:'bold', lineHeight:'1.5rem'}}>
                    {props.title}
                </div>
            </div>
            <div style={{marginBottom:"1em", display:'flex', justifyContent:'left', flexWrap:'wrap'}}>
                {props.tags.map((item: string) => {
                    return (
                    <div style={{backgroundColor:'#696969', borderRadius:'4px', padding:'0 .5rem', marginRight:'.2rem', color:'white'}}>
                        {item}
                    </div>
                    )
                })}
            </div>
        </div>
    );
}