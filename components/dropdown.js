"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const categories = [
    "Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "Python",
    "AI / ML",
    "CSS",
    "Backend",
    "DevOps",
];

const CategorySelect = ({ category, setCategory }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-secondaryForeground">
                Category
            </label>

            <Select onValueChange={setCategory} value={category}>
                <SelectTrigger className="h-12 w-full rounded-xl border border-border bg-card shadow-sm transition-all focus:ring-2 focus:ring-[#7a6eff]">
                    <SelectValue placeholder="Select a category" />
                </SelectTrigger>

                <SelectContent className="border border-card bg-card">
                    {categories.map((item) => (
                        <SelectItem
                            key={item}
                            value={item}
                            className="cursor-pointer focus:bg-[#7a6eff]/20"
                        >
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default CategorySelect;