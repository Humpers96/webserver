import Agent from 'https';
import { LASTFM_API_KEY } from "../secrets.js"

const http_options = {
    hostname: "ws.audioscrobbler.com",
    path: `/2.0/?method=user.getrecenttracks&user=bbcradio1&api_key=${LASTFM_API_KEY}&format=json&limit=1`,
    method: 'GET',
    port: 443
};

export function whats_playing(req_in, res_in)
{
    const request = Agent.get(http_options, (res) => 
    {
        res.on('data', (data) =>
        {
            const json = data.toString();
            const json_obj = JSON.parse(json);

            const track_string = `${json_obj.recenttracks.track[0].name} - ${json_obj.recenttracks.track[0].artist["#text"]}`;

            res_in.send(track_string);
        });
    });

    request.on('error', e => 
    {
        res_in.status(204);
    });
}