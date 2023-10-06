"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"


// Legacy imports
import Image from "next/image"
import contactIcon from "../../public/ContactIcon.svg"

const baseEmail = z.string().transform(val => val === "" ? undefined : val).optional();
const emailSchema = baseEmail.refine(val => val === undefined || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val), { message: "Invalid email" });

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters.", }),
    email: emailSchema,
    topic: z.string().optional(),
    message: z.string().min(2, { message: "Your message must be at least 2 characters", }).max(1000, { message: "Your message can be a maximum of 1000 characters.",}),
})


export function ContactPage () {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            topic: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('Form values:', values);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            const data = await response.json();
            toast({
                title: "📬 Thanks!",
                description:(
                    <p className="text-sm font-medium">Your message has been sent, I'll get back to you shortly.</p>
                ),
            });

            // Reset the form
            form.reset({
                name: "",
                email: "",
                topic: "",
                message: "",
            });
        } catch (error) {
            toast({
                title: "😖 Oops..",
                description:(
                    <p className="text-sm font-medium">Your message failed to send, please try again later or reach out elsewhere.</p>
                ),
            });
        }
    }

    return(
        <div className="flex py-16 my-16 px-24">
            <div className="flex-col rounded-lg items-center justify-center p-16 border bg-card text-card-foreground shadow-sm">
                <h1 className="text-6xl text-center font-semibold text-foreground mb-8">
                🤝🏼 Want to work together? Let's chat!
                </h1>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="flex justify-start items-center space-x-8">
                            <div className="flex-grow">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormDescription>
                                            Who's writing this message?
                                        </FormDescription>
                                        <FormControl>
                                            <Input placeholder="Don Norman" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            </div>
                            <div className="flex-grow">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email (Optional)</FormLabel>
                                        <FormDescription>
                                               Where can I reach you?  
                                        </FormDescription>
                                        <FormControl>
                                            <Input placeholder="name@yoursite.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            </div>
                            </div>
                            <div>
                            <FormField
                                control={form.control}
                                name="topic"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Topic (Optional)</FormLabel>
                                        <FormDescription>
                                            What's this about?
                                        </FormDescription>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>  
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a topic" />    
                                                </SelectTrigger>      
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="design">👨🏼‍💻 Design</SelectItem>
                                                <SelectItem value="science">🧑🏼‍🔬 Science</SelectItem>
                                                <SelectItem value="other">🙋🏼 Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            </div>
                            <div>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormDescription>
                                            What did you want to chat about?
                                        </FormDescription>
                                        <FormControl>
                                            <Textarea
                                            placeholder="I'd love to work with you on..."
                                            className="resize-none"
                                            {...field}
                                        />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            </div>
                            <Button type="submit" className="w-full">Send message</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}


