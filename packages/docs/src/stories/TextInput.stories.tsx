import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@rids-ui/react'

export default {
    title: "Form/Text Input",
    component: TextInput,
    args: {},
    // são componentes, passamos eles dentro desta propriedade e ele é renderizado no storybook
    decorators: [
        (Story) => {
            return (
                <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text size='sm'>E-mail address</Text>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'call.com/'
    }
}
