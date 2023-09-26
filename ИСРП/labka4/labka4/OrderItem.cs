using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace labka4
{
    public class OrderItem
    {
        private int itemNumber { get; set; }
        private int quantity { get; set; }
        private double price { get; set; }

        // Ассоциация: Строка заказа связана с комплектующими изделиями
        public List<ComponentPart> ComponentParts { get; set; } = new List<ComponentPart>();

        // Ассоциация: Строка заказа связана с определенным заказом
        public Order Order { get; set; }

        public void Create()
        {
            // Логика создания строки заказа
        }

        public void SetInfo()
        {
            // Логика установки информации о строке заказа
        }

        public void GetInfo()
        {
            // Логика получения информации о строке заказа
        }
    }
}