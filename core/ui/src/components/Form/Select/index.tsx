import React from 'react'
import ReactSelect, { GroupBase, Props } from 'react-select'

interface SelectProps<O, M extends boolean = false, T extends GroupBase<O> = GroupBase<O>>
  extends Props<O, M, T> {
  closeIcon?: boolean
  error?: boolean
}

export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  ...rest
}: SelectProps<Option, IsMulti, Group>) => {
  return (
      <ReactSelect
        styles={{
          indicatorSeparator: () => ({
            display: 'none'
          }),

          input: props => ({
            ...props,
            padding: 0,
            margin: 0
          }),
          placeholder: props => ({
            ...props,
            fontSize: '15px',
            color: '#55514F'
          }),
          singleValue: props => ({
            ...props,
            fontSize: '14px'
          }),
          container: props => ({
            ...props,
            borderRadius: '5px',
            borderColor: '#929292',
            cursor: 'pointer',
            height: '31px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F1F1 100%)'
          }),
          control: props => ({
            ...props,
            cursor: 'pointer',
            border: '1px solid #929292',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F1F1 100%)',
            boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.85), inset 0px 1px 0px 1px #FFFFFF'

            // background: theme.colors.white,
          }),
          valueContainer: props => ({
            ...props,
            cursor: 'pointer',
            paddingTop: 0,
            paddingBottom: 0
          }),
          menuList: props => ({
            ...props,
            width: '100%'
          }),
          option: (props) => ({
            ...props,
            fontSize: '14px'
            // background: isSelected ? theme.colors.darkPrimary : theme.colors.trueWhite
          }),
          clearIndicator: props => ({
            ...props,
            cursor: 'pointer',
            margin: '0 15px 0 0'
          }),
          indicatorsContainer: props => ({
            ...props,
            cursor: 'default'
          })
        }}
        {...rest}
      />
  )
}
