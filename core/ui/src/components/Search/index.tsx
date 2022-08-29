import React, { HTMLAttributes, InputHTMLAttributes } from 'react'
import Input from '../Form/components/Input'
import Container from './styles'
/* global HTMLButtonElement */
/* global HTMLInputElement */
/* global HTMLElement */
interface ISearchProps{
    buttonSearchClick?:React.MouseEventHandler<HTMLButtonElement>,
    inputProps?:InputHTMLAttributes<HTMLInputElement>,
    containerProps?:HTMLAttributes<HTMLElement>
}

const Search:React.FC<ISearchProps> = ({ buttonSearchClick, inputProps, containerProps }) => (
    <Container {...containerProps}>
        <Input {...inputProps}/>
        <button onClick={buttonSearchClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7124 10.0629H11.4351L16 14.6369L14.6369 16L10.0629 11.4351V10.7124L9.81589 10.4563C8.77301 11.3528 7.4191 11.8925 5.94625 11.8925C2.66209 11.8925 0 9.23042 0 5.94625C0 2.66209 2.66209 0 5.94625 0C9.23042 0 11.8925 2.66209 11.8925 5.94625C11.8925 7.4191 11.3528 8.77301 10.4563 9.81589L10.7124 10.0629ZM1.82962 5.94626C1.82962 8.22413 3.66838 10.0629 5.94626 10.0629C8.22413 10.0629 10.0629 8.22413 10.0629 5.94626C10.0629 3.66838 8.22413 1.82962 5.94626 1.82962C3.66838 1.82962 1.82962 3.66838 1.82962 5.94626Z" fill="#3C3C3C"/>
            </svg>

        </button>
    </Container>
)

export default Search
