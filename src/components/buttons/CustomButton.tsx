import { Button } from "@/components/ui/button"


interface CustomButtonProps {
    title: string
}

export default function CustomButton({title}: CustomButtonProps) {
    return ( 
        <Button variant="default"> { title }</Button>
    )
}

