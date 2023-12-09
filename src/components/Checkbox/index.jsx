import React from 'react';
import { AreaInput, InputStyled, LabelLarge } from './styles';

function Input(props) {

    return (
        <AreaInput>
            <InputStyled
                name={props.name?? undefined}
                type={props.type?? string}
                value={props.value?? ''}
                onChange={props.onChange}
            />
            <LabelLarge>{props.label}</LabelLarge>
        </AreaInput>
    );
}

export default Input;
