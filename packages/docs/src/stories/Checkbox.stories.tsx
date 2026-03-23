/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text} from '@ignite-ui/react/src'
import { Checkbox, CheckboxProps } from '@ignite-ui/react/src/components/Checkbox'


export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}