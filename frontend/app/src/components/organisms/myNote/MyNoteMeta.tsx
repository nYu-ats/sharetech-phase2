import { VFC, useContext, useState } from 'react';
import { MyNoteMetaContext } from '../../../pages/MyNote.page';
import { BaseMyNoteProps } from './BaseMyNote';
import { SimpleSlider } from '../../molecules/slider/SimpleSlider'
import { SimpleTextInput } from '../../molecules/myNoteItem/SimpleTextInput';
import { VariableTextInput } from '../../molecules/myNoteItem/VariableTextInput';
import { IconNumbering } from '../../../icons/IconNumbering';
import { SimpleButton } from '../../atoms/button/SimpleButton';
import { IconSelecter } from '../../molecules/myNoteItem/IconSelecter';

export type MyNoteMetaProps = BaseMyNoteProps & {}

export const MyNoteMeta:VFC<MyNoteMetaProps> = () => {
    const context = useContext(MyNoteMetaContext);
    const [iconSelectorState, setIconSelectorState] = useState<boolean>(false);
    const changeIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
        context.changeIcon(e);
        setIconSelectorState(false);
    }
    const toggleIconSelector = (e: React.MouseEvent<HTMLButtonElement>) => {
        const nextIconSelectorState = !iconSelectorState;
        setIconSelectorState(nextIconSelectorState);
    }

    return (
        <div>
            <div style={{marginBottom:"1em", display: context.mode==="VIEW" ? "none" : "block"}}>
                <SimpleSlider
                sliderValues={context.sliderValues}
                active={context.myNoteMetaState.expose ? "expose" : "dispose"}
                onClick={context.switchDispose}/>
            </div>
            <div style={{marginBottom:"1em", display:"flex", justifyContent:"left"}}>
                <p style={{color:"#666", fontWeight:"bold", margin:"0", whiteSpace:"nowrap"}}>アイコン：　</p>
                {IconNumbering[context.myNoteMetaState.icon]}
                <div style={{paddingLeft:"1em"}}>
                    <SimpleButton 
                    label= "変更"
                    color='#666' 
                    width='56px' 
                    height='24px' 
                    backgroundColor='#00bfff' 
                    hoverBgColor='#87cefa'
                    onClick={toggleIconSelector}/>
                </div>
                <div style={{
                    position:"relative", 
                    display: iconSelectorState ? "block" : "none"}}>
                    <IconSelecter seleted={context.myNoteMetaState.icon} changeIcon={changeIcon}/>
                </div>
            </div>
            <div style={{marginBottom:"1em"}}>
                <SimpleTextInput 
                label="タイトル"
                textChange={context.changeTitle}
                disabled={context.mode==="VIEW"}/>
            </div>
            <div style={{marginBottom:"1em"}}>
                <VariableTextInput 
                label='タグ' 
                tags={context.myNoteMetaState.tags} 
                addTag={context.addTag} 
                changeTag={context.changeTag} 
                deleteTag={context.deleteTag}
                disabled={context.mode==="VIEW"}/>
            </div>
        </div>
    );
}