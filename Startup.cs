using Microsoft.Owin;
using Owin;
using System.Diagnostics;

[assembly: OwinStartupAttribute(typeof(SKLTFZ.Startup))]
namespace SKLTFZ
{
    public partial class Startup
    {

        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            //Process.Start("CMD.exe", "/K yarn run start");
            //Process.Start("cmd", "/C start http://localhost:8080");

        }
    }
}
