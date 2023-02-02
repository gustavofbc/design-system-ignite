import { Check } from "phosphor-react";
import { ComponentProps } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> { }

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxContainer {...props}>
            {/* asChild faz com que o elemento que o recebe torne-se um filho do elemento pai */}
            <CheckboxIndicator asChild>
                <Check weight="bold" />
            </CheckboxIndicator>
        </CheckboxContainer>
    )
}

Checkbox.displayName = 'Checkbox'