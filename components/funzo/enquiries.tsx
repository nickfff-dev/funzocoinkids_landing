"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactElement, ReactNode } from "react";

export function EnquiryModal({
  title,
  children,
  description,
  trigger,
}: {
  title: string;
  children: ReactNode;
  description?: string;
  /**
   * Any single clickable element (Button, <a>, custom card, etc).
   * Intentionally typed as ReactElement, not ReactNode: Base UI's
   * `render` prop clones the element and merges onClick/aria props
   * onto it — that only works on one real element, not a string,
   * fragment, or array.
   */
  trigger: ReactElement;
}) {
  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent className="lg:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}