import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { rootAction } from '../store/rootActions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(rootAction, dispatch)
}