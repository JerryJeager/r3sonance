import type { Snapshot, CompatibilityResult, UserProfile } from './types'

export const currentUser: UserProfile = {
  name: 'Jerry Amadi',
  email: 'jerry.amadi@email.com',
  public_id: 'r3s_92kx8a',
}

export const userSnapshot: Snapshot = {
  snapshot: {
    top_artists: [
      {
        id: '1',
        name: 'Kendrick Lamar',
        image: 'https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022',
        spotify_url: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg',
      },
      {
        id: '2',
        name: 'Frank Ocean',
        image: 'https://i.scdn.co/image/ab6761610000e5ebee3123e593174208f9aced64',
        spotify_url: 'https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM',
      },
      {
        id: '3',
        name: 'SZA',
        image: 'https://i.scdn.co/image/ab6761610000e5eb5f0db857ab tried9f8da119',
        spotify_url: 'https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP',
      },
      {
        id: '4',
        name: 'Tyler, The Creator',
        image: 'https://i.scdn.co/image/ab6761610000e5eb8278b782cbb5a3963db88ada',
        spotify_url: 'https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF',
      },
      {
        id: '5',
        name: 'Daniel Caesar',
        image: 'https://i.scdn.co/image/ab6761610000e5eb47e674004689c12f8e856e59',
        spotify_url: 'https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA',
      },
    ],
    top_tracks: [
      {
        id: 't1',
        name: 'luther',
        album_name: 'GNX',
        album_image: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
        duration_ms: 212000,
        spotify_url: 'https://open.spotify.com/track/1',
        artists: [
          { id: '1', name: 'Kendrick Lamar' },
          { id: '6', name: 'SZA' },
        ],
      },
      {
        id: 't2',
        name: 'Pink + White',
        album_name: 'Blonde',
        album_image: 'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526',
        duration_ms: 193000,
        spotify_url: 'https://open.spotify.com/track/2',
        artists: [{ id: '2', name: 'Frank Ocean' }],
      },
      {
        id: 't3',
        name: 'Kill Bill',
        album_name: 'SOS',
        album_image: 'https://i.scdn.co/image/ab67616d0000b2730c471c36970b9406233842a5',
        duration_ms: 153000,
        spotify_url: 'https://open.spotify.com/track/3',
        artists: [{ id: '3', name: 'SZA' }],
      },
      {
        id: 't4',
        name: 'EARFQUAKE',
        album_name: 'IGOR',
        album_image: 'https://i.scdn.co/image/ab67616d0000b273e3a09731e1f0b1f8c8b8e06b',
        duration_ms: 190000,
        spotify_url: 'https://open.spotify.com/track/4',
        artists: [{ id: '4', name: 'Tyler, The Creator' }],
      },
      {
        id: 't5',
        name: 'Best Part',
        album_name: 'Freudian',
        album_image: 'https://i.scdn.co/image/ab67616d0000b2730c13d3d5a503c84fcc60ae94',
        duration_ms: 219000,
        spotify_url: 'https://open.spotify.com/track/5',
        artists: [
          { id: '5', name: 'Daniel Caesar' },
          { id: '7', name: 'H.E.R.' },
        ],
      },
      {
        id: 't6',
        name: 'Nights',
        album_name: 'Blonde',
        album_image: 'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526',
        duration_ms: 306000,
        spotify_url: 'https://open.spotify.com/track/6',
        artists: [{ id: '2', name: 'Frank Ocean' }],
      },
      {
        id: 't7',
        name: 'NEW MAGIC WAND',
        album_name: 'IGOR',
        album_image: 'https://i.scdn.co/image/ab67616d0000b273e3a09731e1f0b1f8c8b8e06b',
        duration_ms: 203000,
        spotify_url: 'https://open.spotify.com/track/7',
        artists: [{ id: '4', name: 'Tyler, The Creator' }],
      },
      {
        id: 't8',
        name: 'HUMBLE.',
        album_name: 'DAMN.',
        album_image: 'https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699',
        duration_ms: 177000,
        spotify_url: 'https://open.spotify.com/track/8',
        artists: [{ id: '1', name: 'Kendrick Lamar' }],
      },
      {
        id: 't9',
        name: 'Snooze',
        album_name: 'SOS',
        album_image: 'https://i.scdn.co/image/ab67616d0000b2730c471c36970b9406233842a5',
        duration_ms: 202000,
        spotify_url: 'https://open.spotify.com/track/9',
        artists: [{ id: '3', name: 'SZA' }],
      },
      {
        id: 't10',
        name: 'Get You',
        album_name: 'Freudian',
        album_image: 'https://i.scdn.co/image/ab67616d0000b2730c13d3d5a503c84fcc60ae94',
        duration_ms: 232000,
        spotify_url: 'https://open.spotify.com/track/10',
        artists: [
          { id: '5', name: 'Daniel Caesar' },
          { id: '8', name: 'Kali Uchis' },
        ],
      },
    ],
  },
}

export const compatibilityData: CompatibilityResult = {
  compared_with: 'Donny C',
  compatibility_result: {
    total_score: 22,
    percentage: 22,
    tier: 'Different Wavelengths',
    breakdown: {
      artist_overlap_score: 15,
      track_overlap_score: 8,
      rank_alignment_score: 30,
      active_hour_score: 45,
      diversity_score: 12,
    },
    shared_artist: [
      {
        id: '1',
        name: 'Kendrick Lamar',
        image: 'https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022',
        rank_a: 1,
        rank_b: 8,
        rank_difference: 7,
      },
      {
        id: '3',
        name: 'SZA',
        image: 'https://i.scdn.co/image/ab6761610000e5eb5f0db857ab9f8da119',
        rank_a: 3,
        rank_b: 5,
        rank_difference: 2,
      },
      {
        id: '5',
        name: 'Daniel Caesar',
        image: 'https://i.scdn.co/image/ab6761610000e5eb47e674004689c12f8e856e59',
        rank_a: 5,
        rank_b: 3,
        rank_difference: 2,
      },
    ],
    shared_tracks: null,
    listening_insights: {
      listening_type_a: 'Night Owl Explorer',
      listening_type_b: 'Morning Routine Listener',
      sync_message:
        "You and Donny C have completely different listening rhythms. You're a night owl who thrives in deep album dives, while they prefer curated morning playlists.",
    },
  },
}
