import { VFC } from 'react';
import { Link } from '../../atoms/link/SimpleLink';
import { BaseContentLinkProps } from './BaseContentLink';
import { TechNoteLinkIcon } from '../../../icons/TechNoteLinkIcon';

export type ContentLinkProps = BaseContentLinkProps & {}

export const TechNoteLink: VFC = () => {
    return (
        <div>
            <div style={{ margin: "0 1em" }}>
                <Link anchorTo="#"><TechNoteLinkIcon color='black' /></Link>
            </div>
        </div>
    );
}