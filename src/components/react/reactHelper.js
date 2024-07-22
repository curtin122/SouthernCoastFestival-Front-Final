import * as React from 'react'
import { createRoot } from 'react-dom/client'

const roots = new Map();

export const renderReactComponent = (Component, container) => {
    // check if the root is empty
    if (!roots.has(container)) {
        // if yes, create a container in the root where specified
        const root = createRoot(container)
        roots.set(container, root)
    }
    const root = roots.get(container)

    // check the type of component is valid and renderable
    if (typeof Component === 'function') {
        root.render(<Component />)
    } else {
        console.error('Invalid component type:', typeof Component)
    }    
}