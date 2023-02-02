import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from '../view'

export function MyRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/v1" />} />
            <Route path="/v1" element={<Dashboard />} />
        </Routes>
    )
}