import React from "react";
import {Switch, VisuallyHidden, useSwitch} from "@nextui-org/react";
import {MoonIcon} from "./moonicon";
import {SunIcon} from "./sunicon";
import { UseSwitchProps } from "@nextui-org/switch/dist/use-switch";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export const ThemeButton = (props: UseSwitchProps | undefined) => {
  const {
    Component, 
    slots, 
    isSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
            onClick={() => setTheme(isSelected ? "light" : "dark")} 
          >
            {isSelected ? <SunIcon/> : <MoonIcon/>}
            
          </div>
      </Component>
     
    </div>
  )
}