"use client";

import {ChevronDown, ChevronUp} from "lucide-react";
import {useState} from "react";
import styled from "styled-components";
import {grow} from "@/ui/Animations.styles";

const SelectContainer = styled.div`
    position: relative;
    max-width: 20rem;
`;

const SelectTrigger = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
    padding: 0.5rem 0.7rem;
    height: 100%;
    background-color: var(--foreground);
    border: 1px solid var(--border);
    color: var(--text-color);
    border-radius: 0.7rem;
    font-weight: 600;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        filter: brightness(0.95);
    }

    svg {
        transition: all 0.3s;
    }
`;

const SelectTriggerLabel = styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
`;

interface SelectOptionsProps {
    position?: "top" | "bottom";
}

const SelectOptions = styled.div<SelectOptionsProps>`
    position: absolute;
    ${({position}) =>
            position === "top"
                    ? "bottom: calc(100% + 0.5rem);"
                    : "top: calc(100% + 0.5rem);"}
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    max-height: 20rem;
    width: max-content;
    background-color: var(--foreground);
    border: 1px solid var(--border);
    color: var(--text-color);
    border-radius: 0.7rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0 0.5rem 2rem 0;
    overflow-y: auto;
    transform-origin: top;
    animation: ${grow} 0.2s ease-out;
    z-index: 50;
`;

export const SelectOption = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.3rem 0.5rem;
    height: 2.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        background: var(--grey);
        filter: brightness(0.95);
    }
`;

interface SelectProps {
    options: { value: string; label: React.ReactNode }[];
    value: string;
    onChange?: (value: string) => void;
    position?: "top" | "bottom";
}

const Select = (props: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(props.value);

    const handleOptionClick = (value: string) => {
        setSelectedOption(value);
        setIsOpen(false);
        if (props.onChange) {
            props.onChange(value);
        }
    };

    const selectedLabel =
        props.options.find((option) => option.value === selectedOption)?.label ||
        props.options[0]?.label;

    return (
        <SelectContainer>
            <SelectTrigger onClick={() => setIsOpen(!isOpen)}>
                <SelectTriggerLabel>{selectedLabel}</SelectTriggerLabel>
                {props.position === "bottom" ? (
                    <ChevronDown width={20} height={20} style={{transform: isOpen ? "rotate(180deg)" : "none"}}/>
                ) : (
                    <ChevronUp width={20} height={20} style={{transform: isOpen ? "rotate(180deg)" : "none"}}/>
                )}
            </SelectTrigger>
            {isOpen && (
                <SelectOptions position={props.position}>
                    {props.options.map((option) => (
                        <SelectOption
                            key={option.value}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </SelectOption>
                    ))}
                </SelectOptions>
            )}
        </SelectContainer>
    );
};

export default Select;