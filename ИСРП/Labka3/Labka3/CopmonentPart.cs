using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Numerics;
using System.Text;
using System.Xml.Linq;

namespace Labka3
{
    public class CopmonentPart
    {
        private  string description { get; set; }
        private string manufacturer { get; set; }
        private string name { get; set; }
        private double price { get; set; }

        public string GetInfo()
        {
            return $"Name: {name}, Description: {description}, Manufacturer: {manufacturer} , Price: {price} ";
        }

    }
  


}