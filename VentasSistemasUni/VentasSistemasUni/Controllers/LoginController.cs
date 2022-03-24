using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VentasSistemasUni.Models;

namespace VentasSistemasUni.Controllers
{
    public class LoginController : Controller
    {

        private VentasSistemasUniEntities db = new VentasSistemasUniEntities();


        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Validar()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Validar(string user, string clave)        
        {

            if (user == "")
            {
                ViewBag.Error = "Ingrese usuario.";
                return View();
            }

            if (clave == "")
            {
                ViewBag.Error = "Ingrese password.";
                return View();
            }

            int usuario = db.ValidarLogin(user, clave).FirstOrDefault() ??-1;

            //Usuario usuario = db.Usuarios.FirstOrDefault(x => x.Login == user & x.Password == clave);
            if (usuario == 1)
            {                
                return RedirectToAction("Index", "Producto");
            }
            else
            {
                return RedirectToAction("NoHallado", "Login");
            }            
        }


        public ActionResult NoHallado()
        {
            ViewBag.ErrorLogin = "Usuario y/o Password errados";
            return View();
        }

    }
}