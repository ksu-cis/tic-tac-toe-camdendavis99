using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToe.Checkers
{
    public class Checker
    {
        public bool King = false;
        public Color Color;

        public Checker(Color color)
        {
            Color = color;
        }
    }
}
