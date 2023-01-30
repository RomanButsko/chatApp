import React from 'react'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './components/pages/home/HomePage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
    )
)

export default router
