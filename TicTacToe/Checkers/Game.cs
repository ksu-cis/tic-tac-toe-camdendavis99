using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToe.Checkers
{
    public class Game
    {
        public Color Turn = Color.Red;

        public Checker[,] Board = new Checker[8, 8];

        public Game()
        {
            for (int i = 0; i < 8; i += 2)
            {
                // Black Checkers
                Board[i + 1, 0] = new Checker(Color.Black);
                Board[i, 1] = new Checker(Color.Black);
                Board[i + 1, 2] = new Checker(Color.Black);

                // Red Checkers
                Board[i, 5] = new Checker(Color.Red);
                Board[i + 1, 6] = new Checker(Color.Red);
                Board[i, 7] = new Checker(Color.Red);
            }
        }

        public string Serialize()
        {
            string state = Turn.ToString() + "\n";
            for (int y = 0; y < 8; y++)
            {
                for (int x = 0; x < 8; x++)
                {
                    Checker checker = Board[x, y];
                    if (checker != null)
                    {
                        state += $"{checker.Color},{checker.King},{x},{y}\n";
                    }
                }
            }
            return state;
        }
    }
}
