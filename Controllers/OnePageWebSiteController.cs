using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services;

namespace SKLTFZ.Controllers
{
    public class OnePageWebSiteController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [WebMethod]
        public string Hello()
        {
            return "hello";
        }
    }
}