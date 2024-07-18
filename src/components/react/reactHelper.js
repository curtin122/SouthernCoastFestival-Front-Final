import * as React from 'react'
import { createRoot } from 'react-dom/client'

const roots = new Map();

export const renderReactComponent = (Component, container) => {
    if (!roots.has(container)) {
        const root = createRoot(container)
        roots.set(container, root)
    }
    const root = roots.get(container)

    if (typeof Component === 'function') {
        root.render(<Component />)
    } else {
        console.error('Invalid component type:', typeof Component)
    }    
}