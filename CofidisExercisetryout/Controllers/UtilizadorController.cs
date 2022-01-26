using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using System.Threading;

namespace CofidisExercisetryout.Controllers
{
    [ApiController]
    [Route("Utilizador")]
    public class UtilizadorController : ControllerBase
    {
        private List<Utilizador> utilizadores = new List<Utilizador>() {
            new Utilizador(25, "21-991956861", "21991956861", "25/11/1996", "gabrielcarreirasbotelho@gmail.com"),
            new Utilizador(26, "21-999999999", "21999999999", "23/05/1996", "julia@gmail.com")
        };
        

        [HttpGet]
        public Utilizador GetUtilizador()
        {            
            Random r = new Random();
            int rInt = r.Next(4, 10); 
            Thread.Sleep(rInt * 1000);
            Utilizador utilizador = utilizadores[0];                        
            return utilizador;
        }

        [Route("utilizadorByEmail")]
        [HttpPost]
        public Utilizador getUtilizadorByEmail([FromBody] string email)
        {
            Random r = new Random();
            int rInt = r.Next(4, 10);
            Thread.Sleep(rInt * 1000);
            Utilizador utilizador = utilizadores.Find(utilizador => (utilizador.Email == email));
            Utilizador utilizadorAux = new Utilizador();
            utilizadorAux.Telefone = utilizador.Telefone;
            utilizadorAux.Telemovel = utilizador.Telemovel;
            utilizadorAux.Email = utilizador.Email;
            return utilizadorAux;
        }

        [Route("nascimentoByTelemovel")]
        [HttpPost]
        public string GetDataNascimentoByTelemovel([FromBody] string telemovel)
        {
            Random r = new Random();
            int rInt = r.Next(4, 10);
            Thread.Sleep(rInt * 1000);
            Utilizador utilizador = utilizadores.Find(utilizador => (utilizador.Telemovel == telemovel));            
            return utilizador.DataNascimento;
        }

    }
}
