import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";
import {AddNoteIcon} from "./AddNoteIcon";
import { CiPalette  } from "react-icons/ci";

// import {CopyDocumentIcon} from "./CopyDocumentIcon.jsx";
// import {EditDocumentIcon} from "./EditDocumentIcon.jsx";
// import {DeleteDocumentIcon} from "./DeleteDocumentIcon.jsx";

export default function ThemeDropdown() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
<Button variant="bordered" className="h-8 bg-foreground-100 hover:bg-foreground-200">
  <div className="flex items-center gap-1">
    <CiPalette className="text-xl" />
    <div className="bg-primary"
      style={{
        width: "16px",
        height: "16px",
   
        borderRadius: "4px",
      }}
    ></div>
  </div>
</Button>


      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="new"
          shortcut="⌘N"
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          Blue
        </DropdownItem>
        <DropdownItem
          key="copy"
          shortcut="⌘C"
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          Emerald
        </DropdownItem>
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          Rose Gold
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          shortcut="⌘⇧D"
          startContent={<AddNoteIcon className={cn(iconClasses, "text-danger")} />}
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
