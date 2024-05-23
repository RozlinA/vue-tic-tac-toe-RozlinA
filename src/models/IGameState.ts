import { Player } from "./Player";

export class IGameState {
  constructor(
    public players: Player[] // public pointsHistory: pointsHistory[], // public showHistory: false
  ) {}
}
