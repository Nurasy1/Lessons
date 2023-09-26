using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace labka4
{
    public class Order
    {
        private int orderNumber { get; set; }
        private DateTime orderDate { get; set; }
        private DateTime OrderComplete { get; set; }

        // Ассоциация: Заказ связан с определенным клиентом
        public Client Client { get; set; }
        // Ассоциация: Заказ связан с определенными строками заказа
        public List<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

        public void Create()
        {
            // Логика создания заказа
        }

        public void SetInfo()
        {
            // Логика установки информации о заказе
        }

        public void GetInfo()
        {
            // Логика получения информации о заказе
        }
    }
}
