using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using TicTacToe.Checkers;

namespace TicTacToe.Pages
{
    public class CheckersModel : PageModel
    {
        public Game Game;

        public void OnGet()
        {
            Game = new Game();
        }

        public void OnPost(string state, int checkerX, int checkerY, int squareX, int squareY)
        {
            Game = new Game();
            Game.Board[squareX, squareY] = Game.Board[checkerX, checkerY];
            Game.Board[checkerX, checkerY] = null;
        }
    }
}