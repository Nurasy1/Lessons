using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Labka3
{
    public class Client1
    {
        private string Name { get; set; }
        private string Address { get; set; }
        private string Phone { get; set; }

        // Список заказов клиента
        public List<Order> Orders { get; set; }

        public Client1()
        {
            Orders = new List<Order>();
        }

        public void AddClient(string name, string address, string phone)
        {
            Name = name;
            Address = address;
            Phone = phone;
        }

        public void RemoveClient()
        {
            Name = null;
            Address = null;
            Phone = null;
        }

        public string GetInfo()
        {
            return $"Name: {Name}, Address: {Address}, Phone: {Phone}";
        }
    }





}