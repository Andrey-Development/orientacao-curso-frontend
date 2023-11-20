import React from 'react';
import { AreaInput, InputStyled, LabelInput } from './styles';

function Input(props) {

    return (
        <AreaInput>
            <LabelInput>{props.label}</LabelInput>
            <InputStyled
                name={props.name?? undefined}
                type={props.type?? string}
                placeholder={props.placeholder?? ''}
                maxLength={props.maxLength?? 255}
                value={props.value?? ''}
                onChange={props.onChange}
            />
        </AreaInput>
    );
}

export default Input;
