using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CofidisExercisetryout
{
    public class Utilizador
    {

        public Utilizador() { }

        public Utilizador(int idade, string telefone, string telemovel, string dataNascimento, string email)
        {
            this.Idade = idade;
            this.Telefone = telefone;
            this.Telemovel = telemovel;
            this.DataNascimento = dataNascimento;
            this.Email = email;
        }

        private int idade;
        private string telefone;
        private string telemovel;
        private string dataNascimento;
        private string email;

        public int Idade { get => idade; set => idade = value; }
        public string Telefone { get => telefone; set => telefone = value; }        
        public string Telemovel { get => telemovel; set => telemovel = value; }
        public string DataNascimento { get => dataNascimento; set => dataNascimento = value; }
        public string Email { get => email; set => email = value; }
    }
}
