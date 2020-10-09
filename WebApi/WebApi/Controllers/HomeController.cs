using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            var PasswordHasher = new PasswordHasher();
            var asd = PasswordHasher.VerifyHashedPassword("", "");
            return View();
        }
    }
}


