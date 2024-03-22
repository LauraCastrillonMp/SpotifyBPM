import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PlaylistList } from "@/components/playlist-list";
export default function Transfer() {
  return (
    <>
      <Tabs defaultValue="playlistTo" className="w-full">
        <TabsList>
          <TabsTrigger value="playlistTo">Playlist To</TabsTrigger>
          <TabsTrigger value="imageToShare">Image To Share</TabsTrigger>
        </TabsList>
        <TabsContent value="playlistTo" className="w-full space-y-4">
          <p className="text-3xl font-bold pt-2">Playlist To</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <PlaylistList />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
