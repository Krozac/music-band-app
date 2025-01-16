import { suiteGallaiseTracks } from './tracks/al1-tracks'
import { pelegrinTracks } from './tracks/al2-tracks'
import { vaisseauDePierreTracks } from './tracks/al3-tracks'

export const TrackList = [
    ...suiteGallaiseTracks,
    ...pelegrinTracks,
    ...vaisseauDePierreTracks
];