import React from 'react'
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react";

interface types {
    name: string;
    className?: string
}
export const IconFinder = ({ name, className }: types) => {
    switch (name) {
        case "AudioWaveform":
            return <AudioWaveform />;
        case "BookOpen":
            return <BookOpen />;
        case "Bot":
            return <Bot />;
        case "Command":
            return <Command />;
        case "Frame":
            return <Frame />;
        case "GalleryVerticalEnd":
            return <GalleryVerticalEnd />;
        case "Map":
            return <Map />;
        case "PieChart":
            return <PieChart />;
        case "Settings2":
            return <Settings2 />;
        case "SquareTerminal":
            return <SquareTerminal />;
        default: return null;
    }
}