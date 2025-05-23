import { GameChallenge } from "@/models/game_challenge";
import { WebResponse } from "@/types";
import { alova } from "@/utils/alova";

export interface GetGameChallengeRequest {
    game_id?: number;
    challenge_id?: string;
}

export async function getGameChallenges(request: GetGameChallengeRequest) {
    return alova.Get<WebResponse<Array<GameChallenge>>>(
        `/games/${request.game_id}/challenges`,
        {
            params: request,
        }
    );
}
