import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function SpotifyIconButton() {
    return (
        <Button variant="outline" className="w-32 h-32">
            <Icons.spotify />
        </Button>
    )
}

export function YouTubeMusicIconButton() {
    return (
        <Button variant="outline" className="w-32 h-32">
            <Icons.youtubeMusic />
        </Button>
    )
}