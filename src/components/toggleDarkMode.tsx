import type { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SunDim as Sun, Moon, Check, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleDarkMode: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="pl-3 pr-4 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md outline-none">
        {theme === "light" && (
          <div className="font-semibold gap-1 text-xs flex justify-between items-center">
            <Sun className=" w-4" /> Light{" "}
          </div>
        )}
        {theme === "dark" && (
          <div className="font-semibold gap-1 text-xs flex justify-between items-center">
            <Moon className=" w-4" /> Dark{" "}
          </div>
        )}
        {theme === "system" && (
          <div className="font-semibold gap-[0.3rem] text-xs flex justify-between items-center">
            <Monitor className=" w-4" /> System{" "}
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => setTheme("light")}
        >
          Light {theme === "light" && <Check className="py-1" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => setTheme("dark")}
        >
          Dark {theme === "dark" && <Check className="py-1" />}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => setTheme("system")}
        >
          System {theme === "system" && <Check className="py-1" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleDarkMode;
