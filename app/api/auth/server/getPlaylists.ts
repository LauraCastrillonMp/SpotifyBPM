import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type playlistResponse = {
    id: string;
    owner: {
        id: string;
        display_name: string;
        href: string;
    }
    href: string;
    name: string;
    description: string;
    images: [
        {
            url: string;
            height: number;
            width: number;
        }
    ];
    tracks: {
        href: string;
        total: number;
    };
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { accessToken } = req.query;
    const options = {
        headers: {
            method: "GET",
            url: "https://api.spotify.com/v1/me/playlists",
            Authorization: `Bearer ${accessToken}`,
        }
    }
    
    try {
        const response = await axios(options);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to get playlists" });
    }
}