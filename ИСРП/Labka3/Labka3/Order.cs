using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Labka3
{
    public class Order
    {
        private DateTime OrderComplete { get; set; }
        private DateTime OrderDate { get; set; }
        private int OrderNumber { get; set; }

        public Order(DateTime completeDate, DateTime date, int number)
        {
            OrderComplete = completeDate;
            OrderDate = date;
            OrderNumber = number;
        }
        public void Create(DateTime completeDate, DateTime date, int number)
        {
            orderComplete = completeDate;
            orderDate = date;
            orderNumber = number;
        }

        // Метод для получения информации о заказе
        public string GetInfo()
        {
            return $"Order Number: {orderNumber}, Order Date: {orderDate}, Completion Date: {orderComplete}";
        }

        // Метод для установки информации о заказе
        public void SetInfo(DateTime completeDate, DateTime date, int number)
        {
            orderComplete = completeDate;
            orderDate = date;
            orderNumber = number;
        }
    }
}
