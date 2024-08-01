"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ColorWheelIcon } from "@radix-ui/react-icons";

export type Variable = {
  id: string;
  hex: string;
  rgb: string;
  hsl: string;
  oklch: string;
  tooltip: string;
};

export const columns: ColumnDef<Variable>[] = [
  {
    accessorKey: "id",
    cell: ({ getValue, row }) => {
      const colourName = String(getValue());
      // mapping colour names to TailwindCSS classes
      function getBgClass(colorName: string) {
        switch (colorName) {
          case "background":
            return "bg-background";
          case "foreground":
            return "bg-foreground";
          case "card":
            return "bg-card";
          case "card-foreground":
            return "bg-card-foreground";
          case "popover":
            return "bg-popover";
          case "popover-foreground":
            return "bg-popover-foreground";
          case "primary":
            return "bg-primary";
          case "primary-foreground":
            return "bg-primary-foreground";
          case "secondary":
            return "bg-secondary";
          case "secondary-foreground":
            return "bg-secondary-foreground";
          case "muted":
            return "bg-muted";
          case "muted-foreground":
            return "bg-muted-foreground";
          case "accent":
            return "bg-accent";
          case "accent-foreground":
            return "bg-accent-foreground";
          case "destructive":
            return "bg-destructive";
          case "destructive-foreground":
            return "bg-destructive-foreground";
          case "border":
            return "bg-border";
          case "input":
            return "bg-input";
          case "ring":
            return "bg-ring";
          case "selection":
            return "bg-selection";
          case "selection-foreground":
            return "bg-selection-foreground";
          default:
            return "";
        }
      }

      const bgClass = getBgClass(colourName);
      const tooltipText = row.original.tooltip;

      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex w-max items-center space-x-4">
                <div
                  className={`w-4 h-4 lg:w-5 lg:h-5 border ${bgClass} rounded-md`}
                />
                <div className="font-mono">{String(getValue())}</div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    header: ({ column }) => {
      return (
        <div className="flex items-center space-x-2">
          <ColorWheelIcon className="h-4 w-4" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-muted-foreground dark:text-muted-foreground"
          >
            Variable
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "hex",
    cell: ({ getValue }) => (
      <div
        className="font-mono cursor-pointer"
        onClick={() => navigator.clipboard.writeText(String(getValue()))}
      >
        {String(getValue())}
      </div>
    ),
    header: () => "HEX",
  },
  {
    accessorKey: "rgb",
    cell: ({ getValue }) => (
      <div
        className="font-mono cursor-pointer"
        onClick={() => navigator.clipboard.writeText(String(getValue()))}
      >
        {String(getValue())}
      </div>
    ),
    header: () => "RGB",
  },
  {
    accessorKey: "hsl",
    cell: ({ getValue }) => (
      <div
        className="font-mono cursor-pointer"
        onClick={() => navigator.clipboard.writeText(String(getValue()))}
      >
        {String(getValue())}
      </div>
    ),
    header: () => "HSL",
  },
  {
    accessorKey: "oklch",
    cell: ({ getValue }) => (
      <div
        className="font-mono cursor-pointer"
        onClick={() => navigator.clipboard.writeText(String(getValue()))}
      >
        {String(getValue())}
      </div>
    ),
    header: () => "LCH",
  },
];
