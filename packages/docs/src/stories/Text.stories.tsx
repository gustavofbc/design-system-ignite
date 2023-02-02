import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: "Typhography/Text",
    component: Text,

    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati expedita impedit at, dolorem quisquam voluptatibus reiciendis eius ipsum. Quidem quae minima neque est dolorem quam aliquid, blanditiis laborum nobis!',
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong',
    }
}