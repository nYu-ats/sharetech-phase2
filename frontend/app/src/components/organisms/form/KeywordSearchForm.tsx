import { VFC } from 'react';
import { BaseFormProps } from './BaseForm';
import { TextFormItem } from '../../molecules/formItem/TextFormItem';
import { SimpleButton } from '../../atoms/button/SimpleButton';

export type KeywordSearchFormProps = BaseFormProps & {

}

export const KeywordSearchForm:VFC<KeywordSearchFormProps> = (props) => {
    return (
        <form style={{
            display:"flex",
            justifyContent:"space-between",
        }}>
            <div style={{width:"75%", height:"24px", marginRight:"5%", display:"block"}}>
                <TextFormItem placeHolder='Tech Noteを探す'/>
            </div>
            <div  style={{width:"20%", height:"24px"}}>
                <SimpleButton label='検索' action='submit' backgroundColor='#0095d9' hoverBgColor='#00a1e9'/>
            </div>
        </form>
    );
}