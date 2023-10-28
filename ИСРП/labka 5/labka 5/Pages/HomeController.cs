// HomeController.cs

using Microsoft.AspNetCore.Mvc;
using System;


namespace WebApplication.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                // В этом месте вы можете обработать данные регистрации (сохранить их в базу данных и т.п.)
                // Пример: сохранение в базу данных
                // dbContext.Users.Add(new User { FirstName = model.FirstName, LastName = model.LastName, Message = model.Message });
                // dbContext.SaveChanges();
                return RedirectToAction("Index", "Home"); // Перенаправление на домашнюю страницу после успешной регистрации
            }

            return View(model);
        }
    }
}
