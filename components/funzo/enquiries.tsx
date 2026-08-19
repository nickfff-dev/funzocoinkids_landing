"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"


type EnquiryModalProps = {
    title: string
    children: ReactNode
    description?: string
    presetInterest?: string
    triggerLabel?: string
    triggerClassName?: string
}


export function EnquiryModal({
    title,
    children,
    description,
    triggerLabel = "Become a Partner",
    triggerClassName,
    triggerVariant = "default",
    triggerSize = 'lg'
}: {
    title: string
    children: ReactNode
    triggerClassName: string
    description?: string
    triggerLabel?: string
    triggerVariant?: "default" | "outline" | "ghost";
    triggerSize?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | undefined
}) {
    return (<Dialog >
        <DialogTrigger
            render={
                    <Button 
                    className={triggerClassName} 
                    size={triggerSize}
                    variant={triggerVariant}
                    >
                        {triggerLabel}
                    </Button>
                }
            />
        <DialogContent className="lg:max-w-2xl">
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                {
                    description && (<DialogDescription>
                  { description }
                </DialogDescription>)
                }
            </DialogHeader>
            
            {children}
          
        </DialogContent>
    </Dialog>)
}