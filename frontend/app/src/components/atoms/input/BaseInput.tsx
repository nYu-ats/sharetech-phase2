import React, {ReactNode} from 'react';

export type BaseInputProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement>;
}
