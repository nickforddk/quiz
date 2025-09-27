// This file contains functions for calculating and managing scores in the quiz application.

export interface Score {
  studentId: string;
  name: string;
  points: number;
}

export class Scoring {
  private scores: Score[] = [];

  addScore(studentId: string, name: string, points: number) {
    const existingScore = this.scores.find(score => score.studentId === studentId);
    if (existingScore) {
      existingScore.points += points;
    } else {
      this.scores.push({ studentId, name, points });
    }
  }

  getScores() {
    return this.scores.sort((a, b) => b.points - a.points);
  }

  resetScores() {
    this.scores = [];
  }
}