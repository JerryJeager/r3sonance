export const BASE_URL = () => {
  const environment = process.env.NODE_ENV;
  // console.log(environment)
  const baseUrl =
    environment === "production"
      ? "https://r3sonance.pxxl.click/api/v1"
      : "http://127.0.0.1:8080/api/v1";
  return baseUrl;
};

export type Artist = {
  id: string
  name: string
  image: string
  spotify_url: string
}

export type Track = {
  id: string
  name: string
  album_name: string
  album_image: string
  duration_ms: number
  spotify_url: string
  artists: { id: string; name: string }[]
}

export type Snapshot = {
  snapshot: {
    top_artists: Artist[]
    top_tracks: Track[]
  }
}

export type SharedArtist = {
  id: string
  name: string
  image: string
  rank_a: number
  rank_b: number
  rank_difference: number
}

export type CompatibilityResult = {
  compared_with: string
  compatibility_result: {
    total_score: number
    percentage: number
    tier: string
    breakdown: {
      artist_overlap_score: number
      track_overlap_score: number
      rank_alignment_score: number
      active_hour_score: number
      diversity_score: number
    }
    shared_artist: SharedArtist[] | null
    shared_tracks: Track[] | null
    listening_insights: {
      listening_type_a: string
      listening_type_b: string
      sync_message: string
    }
  }
}

export type UserProfile = {
  name: string
  email: string
  public_id: string
  avatar?: string
}
