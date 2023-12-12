import React, { useState } from 'react';
import { FaCaretDown } from '@react-icons/all-files/fa/FaCaretDown';
import { FaCaretUp } from '@react-icons/all-files/fa/FaCaretUp';
import {
    DropdownPather
    , DropdownBtn
    , DropdownContent
    , DropdownItem
} from './styles';

function Dropdown({ selected, setSelected, items }) {
    const [isActive, setIsActive] = useState(false);
    const [nameSelected, setNameSelected] = useState(null);
    return (
        <DropdownPather>
            <DropdownBtn onClick={() => setIsActive(!isActive)}>
                {nameSelected || "Selecione uma escola"}
                {isActive ? (<FaCaretUp />) : (<FaCaretDown />)}
            </DropdownBtn>
            {isActive && items && (
                <DropdownContent>
                    {items.map((item) => (
                        <DropdownItem
                            onClick={e => {
                                setSelected(item.id);
                                setNameSelected(item.name);
                                setIsActive(false);
                            }}
                        >
                            {item.name}
                        </DropdownItem>
                    ))}
                </DropdownContent>
            )}
        </DropdownPather>
    )
}

export default Dropdown;
