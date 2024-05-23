import { Player } from "./Player";

export interface IGameState {
  players: Player[];
  // score: Score[];
  showResults: boolean;
}

// export class IGameState {
//   constructor(
//     public players: Player[] // public pointsHistory: pointsHistory[], // public showHistory: false
//   ) {}
// }
