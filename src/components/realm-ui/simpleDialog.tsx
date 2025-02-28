import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import React from "react";

export const SimpleDialogBox = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>Click for dialog</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Realm Anvil Dialog</DialogTitle>
                    <DialogDescription>
                        Here we have a very cool dialog popping up within Realm Anvil with FoundryVTT.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <p>This is where additional dialog stuff would go.</p>
                </div>
                <DialogFooter>
                    <p>This is where the dialog's footer lives.</p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}