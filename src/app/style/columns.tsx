"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

import { ColorWheelIcon } from "@radix-ui/react-icons"

export type Variable = {
    id: string
    hex: string
    rgb: string
    hsl: string
    oklch: string
}


export const columns: ColumnDef<Variable>[] = [
    {
        accessorKey: 'id', // Use 'id' as an accessor to pass the value to the cell renderer
        cell: ({ getValue }) => (
            <div className={`w-4 h-4 lg:w-5 lg:h-5 border bg-${getValue()} rounded-md`} />
        ),
        header: () => <div className="flex justify-center items-center"><ColorWheelIcon className="h-4 w-4" /></div>,
    },
    {
        accessorKey: 'id',
        cell: ({ getValue }) => <div className="font-mono">{String(getValue())}</div>,
        header: ({ column }) => {
            return (
                <Button
                variant="ghost"
                size="sm"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="text-muted-foreground dark:text-muted-foreground"
                >
                    Variable
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: 'hex',
        cell: ({ getValue }) => <div className="font-mono cursor-pointer"
        onClick={() => navigator.clipboard.writeText(String(getValue()))}>{String(getValue())}</div>,
        header: () => 'HEX',
    },
    {
        accessorKey: 'rgb',
        cell: ({ getValue }) => <div className="font-mono cursor-pointer"
        onClick={() => navigator.clipboard.writeText(String(getValue()))}>{String(getValue())}</div>,
        header: () => 'RGB',
    },
    {
        accessorKey: 'hsl',
        cell: ({ getValue }) => <div className="font-mono cursor-pointer"
        onClick={() => navigator.clipboard.writeText(String(getValue()))}>{String(getValue())}</div>,
        header: () => 'HSL',
    },
    {
        accessorKey: 'oklch',
        cell: ({ getValue }) => <div className="font-mono cursor-pointer"
        onClick={() => navigator.clipboard.writeText(String(getValue()))}>{String(getValue())}</div>,
        header: () => 'LCH',
    },
]
   