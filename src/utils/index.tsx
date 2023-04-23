import { useEffect } from 'react'

export default function useOutsideClick(
    ref,
    callback,
) {
    useEffect(() => {
        function handleClickOutside(e) {
            const target = e.target
            if (ref.current && !ref.current.contains(target)) {
                callback(e)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, callback])
}
