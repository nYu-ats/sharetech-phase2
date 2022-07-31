import { VFC } from 'react';
import { KeywordSearchForm } from '../form/KeywordSearchForm';
import { Link } from '../../atoms/link/SimpleLink';
import { BaseHeaderProps } from './BaseHeader';
import { OutlinedHomeIcon } from '../../../icons/OutlinedHomeIcon';
import { OutlinedHelpIcon } from '../../../icons/OutlinedHelpIcon';
import { OutlinedAccountIcon } from '../../../icons/OutlinedAccountIcon';
import Logo from '../../../icons/logo.png';

export type HeaderProps = BaseHeaderProps & {}

export const Header:VFC = () => {
    return (
        <div style={{
            width: "100vw",
            height: "100px",
            backgroundColor: "#33ccff",
            borderBottom:"1px solid white",
        }}>
            <div style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                width: "95vw",
                height: "60px",
                padding: "0 2.5vw"
            }}>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    width:"15%",
                    margin:"auto .5em"
                }}>
                    <div style={{display:"flex"}}>
                        <div>
                            <Link anchorTo="/home">
                                <OutlinedHomeIcon color='white'/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{width:"70%", textAlign:"center"}}>
                </div>
                <div style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    justifyContent:"right",
                    width:"15%",
                    margin: "auto .5em",
                    }}>
                        <div style={{margin:"0 1em"}}>
                            <Link anchorTo="#"><OutlinedHelpIcon color='white'/></Link>
                        </div>
                        <div style={{
                            borderRadius:"16px",
                            backgroundColor:"white", 
                            textAlign:"center", 
                            border:".5px solid #666",
                            boxSizing:"border-box",
                            width:"28px",
                            height:"28px",
                        }}>
                            <Link anchorTo="#">
                                <OutlinedAccountIcon/>
                            </Link>
                        </div>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "right",
                height:"40px",
                width: "95vw",
                padding: "0 2.5vw"
                }}>
                <div style={{width:"280px", height:"100%"}}>
                    <KeywordSearchForm/>
                </div>
            </div>
        </div>
    );
}