'use client'

import { useRouter } from 'next/navigation'

type LoginButtonProps = {
    children: React.ReactNode,
    mode?: "modal" | "red",
    asChild?: boolean,
}

export const LoginButton = ({children, mode, asChild}: LoginButtonProps) => {
const router = useRouter()

const onClick = () => {
    router.push('/auth/login')
}

if (mode === 'modal') {
    return (
        <span>
            TODO: Implement modal
        </span>
    )
}

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}

export default LoginButton