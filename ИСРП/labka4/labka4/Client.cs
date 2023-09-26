using System;
using System.Collections.Generic;

namespace labka4
{
    public class Client
    {
        private String name { get; set; }
        private String address { get; set; }
        private String phone { get; set; }

        // Ассоциация: Клиент может иметь несколько заказов
        public List<Order> Orders { get; set; } = new List<Order>();

        public static void AddClient()
        {
            // Логика добавления клиента
        }

        public void RemoveClient()
        {
            // Логика удаления клиента
        }

        public void GetInfo()
        {
            // Логика получения информации о клиенте
        }

    }

    
}
